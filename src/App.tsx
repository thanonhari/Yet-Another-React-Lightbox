import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/counter.css";
import Download from "yet-another-react-lightbox/plugins/download";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import "yet-another-react-lightbox/plugins/thumbnails.css";

import { useState } from "react";
import { slides } from "./data";
import { Thumbnails } from "yet-another-react-lightbox/plugins";
import Images from "./Images";

function App() {
  // const [open, setOpen] = useState<boolean>(false);
  const [index, setIndex] = useState<number>(-1);
  return (
    <>
      {/* <button onClick={() => setOpen(true)}>Open LightBox</button> */}
      <h1 className="flex items-center justify-center font-bold">วันเดียวเที่ยวฉะเชิงเทรา</h1>
      <Images
        data={slides}
        onClick={(currentIndex) => setIndex(currentIndex)}
      />
      <Lightbox
        plugins={[Captions, Download, Fullscreen, Thumbnails]}
        captions={{
          showToggle: true,
          descriptionTextAlign: "end",
        }}
        // open={open}
        index={index}
        open={index >= 0}
        close={() => setIndex(-1)}
        slides={slides}
        // close={() => setOpen(false)}
      />
    </>
  );
}

export default App;
