function Hero() {
  return (
    <main class="screen-fit">
      <div class="container-fit section flex flex-col md:flex-row gap-5 items-center justify-between">
        <div>
          <h1 class="text-3xl md:text-5xl font-bold">Tailwind X React</h1>
          <p class="font-medium text-lg mt-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto in quod enim! Optio dicta voluptatum pariatur, tenetur error ad repellat.</p>
          <div class="flex flex-wrap gap-3 mt-4">
            <a href="https://github.com/dev4ult/tailwind-react" class="btn btn-primary">
              <span>Try Now</span>
              <i class="ri-rocket-line"></i>
            </a>
            <button type="button" class="btn btn-primary btn-outline">
              <span>Learn More</span>
              <i class="ri-arrow-right-line"></i>
            </button>
          </div>
        </div>
        <img src="https://source.unsplash.com/random/?mountain" alt="" class="h-96 w-[30rem] rounded-xl object-cover" />
      </div>
    </main>
  );
}

export default Hero;
