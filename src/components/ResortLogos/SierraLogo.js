import React from 'react';
import { Constants, Svg } from 'expo';
import { View, StyleSheet } from 'react-native';

const {
  G,
  Path,
} = Svg;

const SierraLogo = ({ width = 60, height = 60 }) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 100 100">
      <G fill="none" fill-rule="evenodd">
        <Path d="M52.425 94.85l-5.02-.007C26.903 93.773 9.43 78.433 5.754 58.276c-3.56-19.527 5.723-38.764 23.203-48.08 17.27-9.204 39-5.96 52.736 7.98 10.297 10.45 14.5 23.092 12.828 37.61C92.417 74.035 78.285 89.6 60.358 93.7c-2.617.6-5.253 1.013-7.933 1.15" fill="#4A4A4A"/>
        <Path d="M74.407 63.113c4.694.503 8.917 1.986 13.122 3.53.21.08.428.146.637.23 1.69.684 1.81 1.268.533 2.564-1.22 1.236-2.452 2.458-3.8 3.56-.7.57-1.24.634-2.088.105-4.43-2.768-9.254-4.34-14.51-4.497-.378-.01-.643.127-.932.31-8.57 5.447-17.873 8.707-28.05 9.183-4.755.223-9.422-.367-13.75-2.57-2.14-1.09-3.894-2.6-4.915-4.817-.3-.652-.6-.587-1.075-.28-1.583 1.026-3.165 2.052-4.76 3.057-.583.368-1.237.51-1.748-.076-.56-.64-.292-1.316.225-1.822 3.224-3.154 6.605-6.083 11.097-7.32.327-.09.654-.188.988-.244 1.38-.23 1.832.16 1.83 1.555-.003.524-.002 1.05-.002 1.787 1.67-1.034 3.23-1.97 4.76-2.955 4.797-3.083 9.937-5.22 15.664-5.765.413-.04.827-.09 1.24-.097 1.834-.03 2.29.48 1.958 2.226-.19.998-.422 1.99-.68 2.974-.16.608-.05.843.624.686 6.045-1.405 12.204-1.426 18.358-1.462.747-.004 1.132-.276 1.484-.91 1.183-2.14 1.677-4.45 1.67-6.853-.01-3.196-1.693-5.393-4.45-6.817-2.857-1.475-5.955-2.17-9.113-2.53-5.812-.66-11.638-1.187-17.45-1.838-3.19-.357-6.325-.996-9.315-2.23-5.827-2.4-6.914-7.04-4.542-12.178 1.54-3.34 4.08-5.887 7.007-8.01 8.548-6.2 18.077-9.555 28.69-9.514 3.507.014 6.89.795 9.997 2.503 2.506 1.378 4.28 3.326 4.604 6.31.016.152.053.303.043.452-.058.85.204 1.972-.618 2.388-.79.4-1.32-.625-1.882-1.112-3.927-3.393-8.564-5.125-13.625-5.844-5.328-.757-10.625-.777-15.74 1.177-5.033 1.92-9.088 5.003-11.33 10.084-.225.514-.4 1.06-.516 1.61-.693 3.283.5 5.32 3.896 6.652 3.61 1.416 7.417 1.974 11.226 2.494 6.166.843 12.393 1.245 18.502 2.507 2.253.465 4.465 1.07 6.576 2.014 4.798 2.144 6.46 5.502 5.263 10.607-.714 3.045-2.218 5.667-4.182 8.056l-.923 1.123" fill="#FEFEFE"/>
        <Path d="M62.89 68.62c-5.144 3.204-19.752 5.595-33.593 2.738.965-.8 2.07-1.19 3.097-1.684 2.51-1.21 4.865-2.724 7.454-3.773 1.68-.68 3.384-1.264 5.235-1.278.836-.005 1.264.158 1.028 1.154-.25 1.058-.39 2.15-.473 3.236-.098 1.29.325 1.62 1.6 1.447 5.214-.707 10.383-1.8 15.652-1.84M23.117 68.97c.952-.348.952-.348.88.55-.344-.102-.67-.212-.88-.55" fill="#4A4A4A"/>
      </G>
    </Svg>
  );
}

export default SierraLogo;