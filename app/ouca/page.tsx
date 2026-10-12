export default function Home() {
  return (
    <div className=" gap-4 flex flex-col justify-center mx-auto md:max-w-3xl px-6 pt-16">
      <div>
        <iframe
          style={{ width: "100%", height: "166" }}
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A275320502&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
          allow="autoplay; encrypted-media"
        ></iframe>
      </div>
      <div>
        <iframe
          style={{ width: "100%", height: "166" }}
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A275165877&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
          allow="autoplay; encrypted-media"
        ></iframe>
      </div>
      <div>
        <iframe
          style={{ width: "100%", height: "166" }}
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A244637888&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
          allow="autoplay; encrypted-media"
        ></iframe>
      </div>
    </div>
  );
}
