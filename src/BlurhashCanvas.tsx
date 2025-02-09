import * as React from 'react';
import { decode } from 'blurhash';

export type Props = React.CanvasHTMLAttributes<HTMLCanvasElement> & {
  hash: string;
  height: number | undefined;
  punch: number | undefined;
  width: number | undefined;
};

export default class BlurhashCanvas extends React.PureComponent<Props> {
  static defaultProps = {
    height: 128,
    width: 128,
  };

  canvas: HTMLCanvasElement | null = null;

  componentDidUpdate() {
    this.draw();
  }

  handleRef = (canvas: HTMLCanvasElement) => {
    this.canvas = canvas;
    this.draw();
  };

  draw = () => {
    const { hash, height, punch, width } = this.props;

    if (this.canvas) {
      const pixels = decode(hash, width ?? 128, height ?? 128, punch ?? 1);

      const ctx = this.canvas.getContext('2d');
      if (ctx) {
        const imageData = ctx.createImageData(width ?? 128, height ?? 128);
        imageData.data.set(pixels);
        ctx.putImageData(imageData, 0, 0);
      }
    }
  };

  render() {
    const { hash, height, width, ...rest } = this.props;

    return <canvas {...rest} height={height} width={width} ref={this.handleRef} />;
  }
}
