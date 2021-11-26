import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

const NanoXSVG = (props: SvgProps) => (
  <Svg width={28} height={141} fill="none" {...props}>
    <Path
      d="M15.057 76.128c0-1.78-.629-3.758-1.645-5.517-1.023-1.774-2.44-3.325-4.004-4.227-1.598-.923-3.122-1.06-4.29-.385-1.16.67-1.798 2.04-1.798 3.86 0 3.576 2.534 7.947 5.648 9.745 1.598.923 3.122 1.06 4.29.385 1.16-.67 1.798-2.04 1.799-3.86zm-5.649 2.714c-1.442-.832-2.75-2.263-3.694-3.898C4.778 73.323 4.2 71.5 4.2 69.86c0-1.493.482-2.593 1.358-3.1.885-.51 2.097-.374 3.411.385 2.872 1.658 5.21 5.688 5.209 8.983 0 1.493-.482 2.594-1.358 3.1-.885.51-2.096.373-3.41-.386zM14.52 27.39c0-3.294-2.336-7.324-5.208-8.983-1.315-.76-2.526-.896-3.411-.385-.876.506-1.358 1.606-1.358 3.099 0 1.64.58 3.463 1.515 5.084.944 1.636 2.251 3.066 3.693 3.899 1.315.759 2.527.895 3.411.384.876-.505 1.358-1.606 1.358-3.098z"
      fill="#000"
    />
    <Path
      d="M18.465 75.848a22.848 22.848 0 00-.887-3.3l.01.004-.002-56.075L.763 6.656.695 65.39l.052.022C.415 66.499.24 67.746.24 69.117v60.967l18.582 10.729v-.074l8.978-5.628V74.154c0-2.013-.392-4.18-1.084-6.304l.288-56.919L9.301.711.64 5.569 18.465 15.86v59.987zM9.31 30.866c-3.114-1.798-5.649-6.17-5.648-9.744 0-1.82.638-3.192 1.798-3.861 1.168-.675 2.692-.538 4.29.385 1.563.902 2.98 2.454 4.004 4.227 1.016 1.76 1.645 3.737 1.645 5.517 0 1.82-.639 3.191-1.798 3.861-1.168.674-2.692.538-4.29-.385zM1.12 129.577v-60.46c0-3.265 1.035-5.736 2.84-6.778 1.465-.845 3.365-.68 5.351.468 4.76 2.747 8.632 10.163 8.631 16.53v59.941l-2.692-1.556-.005.01-14.125-8.155zm25.8-55.423l.001 60.47-8.099 5.077V84.787l7.831-4.521.045-8.803c.143.916.223 1.82.223 2.691z"
      fill="#000"
    />
    <Path
      d="M7.656 97.325v-.697l-2.62-1.515-.003 4.78.58.337.004-4.085 2.039 1.18zM13.679 104.895l.58.336.004-4.782-2.62-1.515v.697l2.039 1.179-.003 4.085zM13.661 128.404l-.003 4.084-2.039-1.179v.697l2.62 1.515.003-4.781-.581-.336zM11.33 114.428c.233-.152.358-.475.359-.865 0-.41-.136-.864-.432-1.227v-.095l.376.217v-.628l-2.056-1.189-.001 1.851.524.303v-1.196l.274.158c.575.333.763.694.763 1.33v.15c-.001.635-.172.844-.964.386l-1.07-.62c-.798-.461-.963-.877-.962-1.512v-.137c0-.622.194-.708.73-.405v-.751c-.786-.386-1.282-.045-1.283.898 0 .458.12.909.347 1.328.336.625.905 1.193 1.702 1.654.77.445 1.339.569 1.692.35zM7.636 124.216v.697l3.986 2.305.002-3.141-.524-.304-.002 2.446-3.462-2.003zM5.593 127.825l.003-4.085-.58-.336-.004 4.782 2.62 1.515v-.697l-2.039-1.179zM11.628 120.08l-.524-.303-.002 2.411-1.219-.705.002-2.103-.524-.303-.002 2.103-1.196-.691.002-2.309-.524-.303-.002 3.005 3.986 2.306.003-3.108zM11.637 107.785l-.524-.303-.002 2.411-1.218-.704.001-2.104-.524-.303-.001 2.104-1.197-.692.002-2.309-.524-.303-.002 3.006 3.987 2.305.002-3.108zM11.63 117.703c.001-1.304-.825-2.267-1.992-2.942-1.185-.685-1.994-.634-1.995.65v1.476l3.986 2.305.001-1.489zm-3.464-1.197l.001-.744c0-.704.149-1.001.946-.54l1.048.606c.798.462.945.93.945 1.633v.745l-2.94-1.7zM11.639 106.181l-1.59-.919.002-1.025c0-.526.182-.632.638-.369l.951.551v-.697l-.86-.497c-.626-.363-.865-.324-.934.183l-.08-.046c-.107-.561-.495-1.133-.956-1.4-.29-.168-.552-.183-.763-.045-.263.176-.394.537-.394 1.104l-.001 1.537 3.986 2.306v-.683zm-3.463-2.003l.001-1.093c0-.533.149-.638.553-.404l.24.138c.415.24.557.507.557 1.047l-.001 1.093-1.35-.781z"
      fill="#000"
    />
  </Svg>
);

NanoXSVG.id = "nanoX";

export default NanoXSVG;
