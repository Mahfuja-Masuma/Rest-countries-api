import React from 'react'

function About() {
  return (
    <main className="bg-[#EEF3FA] py-[100px]">
    <div className="flex justify-between">
      <div className="about_content ml-[50px]">
        <h2 className="text-[50px] w-[513.73px]  font-bold capitalize leading-snug text-[#1C2045] mb-[23px]">
        Fruits are an excellent source of essential vitamins and minerals
        </h2>
        <p className="text-[#3a505f] leading-[26px] w-[530px]">
          consectetur adipisicing elit. Labore eius molestiae facere, natus
          reprehenderit eaque eum , autem ipsam. Magni, error. Tempora odit
          laborum iure inventore possimus laboriosam qui nam.! Lorem ipsum
          dolor sit amet, consectetur adipisicing elit. Deleniti reiciendis,
          dolor error fugiat ducimus similique sit sed veritatis ullam autem
          ex, accusamus iure quod architecto odit minus. Vitae nostrum enim
          at laboriosam cupiditate ut molestias! Ipsum inventore non porro.
          Odio? Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Tempora deleniti id reprehenderit corrupti amet labore sed vitae
          at officia quia!
        </p>

       
      </div>

      <div className="mr-[50px]">
        <img
          src="../images/about.jpg"
          alt="about images"
          className="rounded-[10px] w-[557px] h-[405px] "
        />
      </div>
    </div>

   
  </main>
  )
}

export default About