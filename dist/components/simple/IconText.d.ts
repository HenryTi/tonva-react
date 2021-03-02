import * as React from 'react';
export interface IconTextProps {
    icon: string;
    iconClass?: string;
    text: string | JSX.Element;
    textClass?: string;
}
export declare class IconText extends React.Component<IconTextProps> {
    render(): JSX.Element;
}
