import { ChromePicker } from "react-color";
import { useColor } from "../color-context";
export default function Layout({ children }) {
  const {
    bodyColor,
    setBodyColor,
    abColor,
    setAbColor,
    buttonsColor,
    setButtonsColor,
  } = useColor();
  return (
    <div className="w-screen min-h-100vh text-white bg-[#1D1D1D] max-w-full">
      <div className="min-h-screen w-[500px] md:w-[80%] max-w-full md:p-8 pt-0 mx-auto md:flex">
        <div className="h-[400px]"> {children}</div>
        <section>
          <h1 className="font-bold text-[34px] mt-2">Make Your own Gameboy</h1>
          <p className="font-bold text-[22px]">
            <span className="text-[#ECA68D] text-[10px]">$</span>120
          </p>
          <p className="text-center mt-10 mb-10">
            We make GameBoys; all colors, pick the color we ship you the GameBoy
          </p>
          <div className="grid grid-cols-3 gap-2">
            <fieldset>
              <legend className="text-lg font-medium text-gray-100">
                Body Color
              </legend>
              <div className="mt-4  border-slate-700 divide-y divide-slate-700">
                <ChromePicker
                  width={"100%"}
                  color={bodyColor}
                  onChangeComplete={(color) => setBodyColor(color.hex)}
                />
              </div>
            </fieldset>
            <fieldset>
              <legend className="text-lg font-medium text-gray-100">
                A&B Buttons Color
              </legend>
              <div className="mt-4  border-slate-700 divide-y divide-slate-700">
                <ChromePicker
                  width={"100%"}
                  color={abColor}
                  onChangeComplete={(color) => setAbColor(color.hex)}
                />
              </div>
            </fieldset>
            <fieldset>
              <legend className="text-lg font-medium text-gray-100">
                Buttons Color
              </legend>
              <div className="mt-4  border-slate-700 divide-y divide-slate-700">
                <ChromePicker
                  width={"100%"}
                  color={buttonsColor}
                  onChangeComplete={(color) => setButtonsColor(color.hex)}
                />
              </div>
            </fieldset>
          </div>
        </section>
      </div>
    </div>
  );
}
