import { usestate, useEffect, useRef, useState } from "react";

export default function CameraCapture() {

  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        videoRef.current.srcObject = stream;
      });
  }, []);

  const capturePicture = async () => {

    setLoading(true);

    try{
      await new Promise(resolve =>
        setTimeout(resolve, 2000)
      )

      console.log("Image captured");
    } catch(error){
      console.log(error);
    } finally {
      setLoading(false);
    }

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    ctx.drawImage(
      videoRef.current,
      0,
      0,
      400,
      300
    );

    const image = canvas.toDataURL("image/png");
    console.log(image)
  }

  return (
    <div>
      <video
        ref={videoRef}
        autoPlay
        width="450"
        style={{borderRadius: "12px"}}
      />
      
      <canvas 
        ref={canvasRef}
        width="400"
        height="300"
        style={{ display: "none" }}
      />

      <button
        className="btn btn-primary"
        style={{ width: "12rem" }}
        onClick={capturePicture}
        disabled={loading}
        >
          {loading ? (
            <>
            <span
            className="spinner-border spinner-border-sm me-2"
            ></span>
            Processing Face...
            </>
          ) : (
            <>
            <i className="fa-solid fa-camera me-2"></i>
            Capture Face
            </>
          )}
      </button>
    </div>
  );
}