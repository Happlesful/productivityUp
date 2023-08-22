import React from "react";
import { SparkLine } from "../charts";

const Productivity = () => {
  const data = [
    { x: 1, y: 10 },
    { x: 2, y: 15 },
    { x: 3, y: 8 },
    { x: 4, y: 12 },
    { x: 5, y: 18 },
    { x: 6, y: 14 },
    { x: 7, y: 9 },
    { x: 8, y: 11 },
    { x: 9, y: 13 },
    { x: 10, y: 16 },
  ];

  return (
    <div className="py-5 px-10">
      <p className="text-lg font-bold underline decoration-2 mb-4">
        Productivity
      </p>
      {/* <SparkLine
        currentColor="blue"
        id="line-sparkline"
        type="Line"
        height="80px"
        width="250px"
        data={data}
        color="blue"
      /> */}
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium aut
      eligendi hic aperiam quisquam ullam aliquid architecto repellat nihil
      aspernatur ad, est laudantium, ipsa pariatur non velit veritatis
      exercitationem. Nesciunt eum tempore odio aut doloribus. Labore adipisci
      rerum, praesentium cum repellendus deserunt doloremque amet ea asperiores
      inventore, veritatis, nesciunt hic ad optio consectetur fuga maiores
      nostrum esse impedit quasi. Assumenda nam sed rem quibusdam quidem, porro
      vitae fugiat soluta maiores recusandae vero veritatis repudiandae tempora
      omnis illo necessitatibus earum non odit pariatur nihil dignissimos qui
      tempore! Excepturi, similique quis quos eos ab dolores eligendi
      voluptatibus eius magnam placeat impedit eveniet cupiditate esse
      perferendis iste exercitationem recusandae delectus facere unde aliquid
      alias! Molestiae aperiam quis sed? Nihil soluta consectetur nam voluptatem
      quasi. Harum dolorum iste eveniet, vitae ex quaerat repellendus est in
      sint sunt esse veniam voluptates, numquam similique, pariatur debitis
      necessitatibus ipsa omnis ipsam neque eos suscipit quas natus. Laborum
      distinctio suscipit laudantium praesentium quibusdam ipsum nisi, nobis
      quaerat, hic, veniam dolor rem laboriosam repudiandae ipsam dolorum at
      pariatur quis natus dicta. Voluptates assumenda fuga nemo fugit,
      reiciendis eaque libero porro velit eveniet corporis quae suscipit earum
      voluptatum reprehenderit laboriosam quo facilis voluptate tenetur
      repellendus consequatur dicta alias soluta quidem.
    </div>
  );
};

export default Productivity;
