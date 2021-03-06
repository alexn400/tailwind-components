import classnames from 'classnames';
import React, { HTMLAttributes, ImgHTMLAttributes } from 'react';
import { Color, Position } from '../../types/tailwind';
import { renderChildrenWithClassName } from '../util/util';

interface CardProps extends HTMLAttributes<HTMLElement> {
  variant?: Color;
  gradient?: boolean;
  horizontal?: boolean;
}

const Card: React.FC<CardProps> = ({ children, gradient, className, variant, ...rest }) => (
  <div
    className={classnames(
      'rounded-xl  shadow-lg',
      variant ? `bg-${variant}-600 from-${variant}-600 to-${variant}-gradient` : 'bg-white',
      gradient && 'bg-gradient-to-tr',
      className
    )}
    {...rest}
  >
    {variant
      ? React.Children.map(children, (child: any) =>
          React.createElement(child?.type, {
            ...child.props,
            variant,
          })
        )
      : children}
  </div>
);

interface CardBodyProps extends HTMLAttributes<HTMLElement> {
  variant?: Color;
}

const CardBody: React.FC<CardBodyProps> = ({ variant, children, className, ...rest }) => (
  <div className={classnames('py-4 px-6', className)} {...rest}>
    {renderChildrenWithClassName(children, variant ? `text-${variant}-50` : 'text-gray-800')}
  </div>
);

interface CardTitleProps extends HTMLAttributes<HTMLHeadingElement> {}

const CardTitle: React.FC<CardTitleProps> = ({
  children,
  className,
  ...rest
}) => (
  <h5
    className={classnames('flex text-xl mb-2 font-bold text-opacity-95', className)}
    {...rest}
  >
    {children}
  </h5>
);

interface CardCoverProps extends HTMLAttributes<HTMLDivElement> {}

const CardCover: React.FC<CardCoverProps> = ({
  children,
  className,
  ...rest
}) => (
  <div className={classnames('relative overflow-hidden rounded-t-xl', className)} {...rest}>
    {children}
  </div>
);

interface CardCoverItemProps extends HTMLAttributes<HTMLElement> {
  xPlacement?: Position;
  yPlacement?: Position;
}

const CardCoverItem: React.FC<CardCoverItemProps> = ({
  xPlacement = 'start',
  yPlacement = 'start',
  children,
  className,
  ...rest
}) => (
  <div
    className={classnames(
      'flex absolute inset-0 p-4 pointer-events-none',
      `items-${yPlacement} justify-${xPlacement}`,
      className
    )}
    {...rest}
  >
    <span className={'pointer-events-auto'}>{children}</span>
  </div>
);

interface CardImageProps extends ImgHTMLAttributes<HTMLImageElement> {}

const CardImage: React.FC<CardImageProps> = ({
  children,
  className,
  alt,
  ...rest
}) => (
  <img className={classnames('object-cover w-full select-none', className)} {...rest} alt={alt}>
    {children}
  </img>
);

interface CardDividerProps extends HTMLAttributes<HTMLElement> {
  vertical?: boolean;
}

const CardDivider: React.FC<CardDividerProps> = ({
  vertical,
  className,
  ...rest
}) => (
  <div
    className={classnames(
      vertical ? 'mx-3 border-l border-gray-200 -my-4' : 'my-3 border-t border-gray-200 -mx-6',
      className
    )}
    {...rest}
  />
);

interface CardTextProps extends HTMLAttributes<HTMLElement> {}

const CardText: React.FC<CardTextProps> = ({
  children,
  className,
  ...rest
}) => (
  <div className={classnames('text-wrap text-opacity-90 mb-3', className)} {...rest}>
    {children}
  </div>
);

export default Object.assign(Card, {
  Body: CardBody,
  Title: CardTitle,
  Cover: CardCover,
  CoverItem: CardCoverItem,
  Img: CardImage,
  Divider: CardDivider,
  Text: CardText,
});
