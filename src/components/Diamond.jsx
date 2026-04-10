import { C } from "../constants";

export default function Diamond({ size = 14, color = C.teal, style = {} }) {
  return (
    <div
      style={{
        width: size,
        height: size,
        background: color,
        transform: "rotate(45deg)",
        borderRadius: 2,
        flexShrink: 0,
        ...style,
      }}
    />
  );
}
