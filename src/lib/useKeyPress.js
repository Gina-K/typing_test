import {
    useState,
    useEffect
} from "react";

function useKeyPress(cb) {
    const [pressedKey, setPressedKey] = useState();

    useEffect(() => {
        function keyDownHandler({key}) {
            if (pressedKey !== key && key.length === 1) {
                setPressedKey(key);
                cb && cb(key);
            }
        }

        function keyUpHandler() {
            setPressedKey(null);
        }

        window.addEventListener("keydown", keyDownHandler);
        window.addEventListener("keyup", keyUpHandler);

        return () => {
            window.removeEventListener("keydown", keyDownHandler);
            window.removeEventListener("keyup", keyUpHandler);
        };
    });
    return pressedKey;
}

export default useKeyPress;