import * as React from "react";
import Svg, { Path } from "react-native-svg";

const NanoX = ({ color }: { color: string }) => (
  <Svg width={85} height={87} fill="none">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M34 4 39.97.64l11.1 6.4-.17 34.24c.13.35.24.72.24 1.02v40.4l-4.74 3.06V51.91l3.78-2.33V44l.18-36.55-10.4-6L35.42 4l10.27 6.04v76L34 79.56V4Zm10.98 6.45v34.46c-.7-2.17-1.9-4.08-3.46-5.26-1.34-1.03-2.75-1.64-4.17-1.33-1.15.25-2.03.67-2.64 1.66V4.4l10.27 6.04Zm-6.54 48.66v.43l-1.24-.72v2.48l-.35-.2v-2.9l1.6.91Zm4.01 5.23-.35-.2v-2.49l-1.24-.71v-.43l1.6.92v2.9ZM42.1 78.4v2.48l-1.24-.72v.42l1.59.92v-2.9l-.35-.2Zm-1.2-9.01c0 .23-.08.43-.22.52-.21.13-.56.06-1.03-.21a2.64 2.64 0 0 1-1.03-1 1.68 1.68 0 0 1-.2-.81c0-.57.3-.78.77-.55v.46c-.33-.19-.44-.13-.44.24v.09c0 .38.1.64.58.92l.65.37c.48.28.58.15.58-.23v-.1c0-.38-.1-.6-.46-.8l-.16-.1v.73l-.32-.19v-1.12l1.25.72v.38l-.23-.13v.06c.18.22.26.5.26.75Zm-2.46 6.46v.43l2.42 1.4v-1.91l-.32-.19v1.49l-2.1-1.22Zm-1.24-.29v2.48l1.24.72v.42l-1.6-.92v-2.9l.36.2Zm3.66-2.22-.32-.18v1.46l-.74-.43v-1.27l-.31-.19v1.28l-.73-.42v-1.4l-.32-.19v1.83l2.42 1.4v-1.89Zm-.3-7.65.3.19v1.88l-2.41-1.4v-1.82l.32.18v1.4l.72.43v-1.28l.32.18v1.28l.74.43V65.7Zm.3 6.2c0-.78-.5-1.37-1.2-1.78-.72-.41-1.22-.38-1.22.4v.9l2.42 1.4v-.91Zm-.95-7.54.96.55v.42l-2.42-1.4v-.94c0-.34.08-.56.24-.67.13-.08.29-.07.46.03.28.16.52.51.58.85l.05.03c.04-.3.19-.33.57-.11l.52.3v.42l-.58-.33c-.27-.16-.38-.1-.38.22v.63Zm2.83-14.14c1.51-.99 1.4-3.85-.24-6.39-1.65-2.53-4.22-3.8-5.74-2.8-1.52.98-1.41 3.84.24 6.38s4.22 3.8 5.74 2.8Zm-.24-36.42c1.65 2.54 1.75 5.4.24 6.38-1.52.99-4.09-.27-5.74-2.81-1.65-2.54-1.76-5.4-.24-6.39 1.52-.98 4.09.28 5.74 2.82Zm-.6.38a6.98 6.98 0 0 1 1.2 3.42c.03 1.02-.28 1.68-.75 1.99-.47.3-1.2.32-2.12-.13a6.98 6.98 0 0 1-2.64-2.48 6.98 6.98 0 0 1-1.19-3.41c-.04-1.03.28-1.69.75-2 .46-.3 1.2-.32 2.12.14.9.44 1.87 1.3 2.63 2.47Zm-3.14 56.55v.45l1.79 1.03v-.45c0-.43-.1-.7-.58-.99l-.63-.37c-.49-.28-.58-.1-.58.33Zm0-7.7v.67l.83.47v-.66c0-.33-.09-.5-.34-.64l-.15-.08c-.24-.14-.33-.08-.33.24Zm4.34-15.4c-.04-1-.43-2.23-1.2-3.4a6.98 6.98 0 0 0-2.63-2.49c-.92-.45-1.66-.43-2.12-.12-.47.3-.79.96-.75 1.99.04 1 .43 2.23 1.2 3.41a6.98 6.98 0 0 0 2.63 2.48c.92.45 1.65.43 2.12.12.47-.3.78-.96.75-1.98Z"
      fill={color}
    />
  </Svg>
);

export default NanoX;
