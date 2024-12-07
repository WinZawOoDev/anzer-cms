
import { Oswald, Nunito_Sans } from "next/font/google";

import { Inter, Open_Sans, Nunito_Sans} from 'next/font/google'


export const oswald = Oswald({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
});


export const nuinto = Nunito_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900", "1000"],
});

export const open_sans = Open_Sans({
    subsets: ['latin'],
    display: 'swap',
})

export const nunito_sans = Nunito_Sans({
    subsets: ['latin'],
    display: 'swap',
})

