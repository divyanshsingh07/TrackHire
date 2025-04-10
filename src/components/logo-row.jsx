import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel"
import Autoplay from "embla-carousel-autoplay"

const companies = [
  {
    name: "Google",
    logo: "https://www.google.com/images/branding/googlelogo/2x/googlelogo_dark_color_272x92dp.png"
  },
  {
    name: "Microsoft",
    logo: "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31"
  },
  {
    name: "Apple",
    logo: "https://www.apple.com/ac/structured-data/images/knowledge_graph_logo.png"
  },
  {
    name: "Amazon",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
  },
  {
    name: "Meta",
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg"
  },
  {
    name: "Netflix",
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
  },
  {
    name: "IBM",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg"
  },
  {
    name: "Intel",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/85/Intel_logo_2023.svg"
  }
]

export const LogoRow = () => {
  return (
    <section className="py-8 sm:py-12">
      <div className="container px-4 sm:px-6">
        <h2 className="text-center text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-foreground">
          Trusted by Top Companies
        </h2>
        <div className="relative">
          <Carousel
            plugins={[
              Autoplay({
                delay: 3000,
              }),
            ]}
            opts={{
              align: "center",
              loop: true,
              dragFree: true,
              containScroll: "trimSnaps",
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 sm:-ml-4">
              {companies.map((company, index) => (
                <CarouselItem 
                  key={index} 
                  className="pl-2 sm:pl-4 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-1/6"
                >
                  <div className="p-2 sm:p-4 flex flex-col items-center justify-center">
                    <div className="h-8 sm:h-12 md:h-16 w-full flex items-center justify-center">
                      <img
                        src={company.logo}
                        alt={`${company.name} logo`}
                        className="max-h-full max-w-[80%] object-contain dark:invert"
                      />
                    </div>
                    <span className="mt-2 text-xs sm:text-sm text-muted-foreground">
                      {company.name}
                    </span>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-background to-transparent sm:hidden" />
          <div className="absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-background to-transparent sm:hidden" />
        </div>
      </div>
    </section>
  )
} 