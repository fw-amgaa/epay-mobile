"use client";
import { vars } from "nativewind";

export const config = {
  light: vars({
    "--color-primary-0": "255 245 247", // Very light pink-white
    "--color-primary-50": "255 230 235", // Blush tint
    "--color-primary-100": "255 204 212", // Soft rose
    "--color-primary-200": "250 176 189", // Light rose
    "--color-primary-300": "245 140 158", // Medium-light rose
    "--color-primary-400": "234 101 120", // Slightly lighter than base
    "--color-primary-500": "224 78 97", // Your base color
    "--color-primary-600": "195 62 81", // Slightly darker
    "--color-primary-700": "165 50 67", // Deeper rose-red
    "--color-primary-800": "135 38 53", // Dark rose
    "--color-primary-900": "102 27 39", // Very dark red
    "--color-primary-950": "61 15 23", // Near black-red

    /* Secondary  */
    "--color-secondary-0": "253 248 255",
    "--color-secondary-50": "248 244 251",
    "--color-secondary-100": "226 209 238",
    "--color-secondary-200": "152 115 178",
    "--color-secondary-300": "211 186 229",
    "--color-secondary-400": "197 163 221",
    "--color-secondary-500": "182 140 212",
    "--color-secondary-600": "152 115 178",
    "--color-secondary-700": "121 90 144",
    "--color-secondary-800": "91 65 109",
    "--color-secondary-900": "60 40 75",
    "--color-secondary-950": "45 28 58",

    /* Tertiary */
    "--color-tertiary-0": "255 250 245",
    "--color-tertiary-50": "255 242 229",
    "--color-tertiary-100": "255 233 213",
    "--color-tertiary-200": "254 209 170",
    "--color-tertiary-300": "253 180 116",
    "--color-tertiary-400": "251 157 75",
    "--color-tertiary-500": "231 129 40",
    "--color-tertiary-600": "215 117 31",
    "--color-tertiary-700": "180 98 26",
    "--color-tertiary-800": "130 73 23",
    "--color-tertiary-900": "108 61 19",
    "--color-tertiary-950": "84 49 18",

    /* Error */
    "--color-error-0": "254 233 233",
    "--color-error-50": "254 226 226",
    "--color-error-100": "254 202 202",
    "--color-error-200": "252 165 165",
    "--color-error-300": "248 113 113",
    "--color-error-400": "239 68 68",
    "--color-error-500": "230 53 53",
    "--color-error-600": "220 38 38",
    "--color-error-700": "185 28 28",
    "--color-error-800": "153 27 27",
    "--color-error-900": "127 29 29",
    "--color-error-950": "83 19 19",

    /* Success */
    "--color-success-0": "228 255 244",
    "--color-success-50": "202 255 232",
    "--color-success-100": "162 241 192",
    "--color-success-200": "132 211 162",
    "--color-success-300": "102 181 132",
    "--color-success-400": "72 151 102",
    "--color-success-500": "52 131 82",
    "--color-success-600": "42 121 72",
    "--color-success-700": "32 111 62",
    "--color-success-800": "22 101 52",
    "--color-success-900": "20 83 45",
    "--color-success-950": "27 50 36",

    /* Warning */
    "--color-warning-0": "255 249 245",
    "--color-warning-50": "255 244 236",
    "--color-warning-100": "255 231 213",
    "--color-warning-200": "254 205 170",
    "--color-warning-300": "253 173 116",
    "--color-warning-400": "251 149 75",
    "--color-warning-500": "231 120 40",
    "--color-warning-600": "215 108 31",
    "--color-warning-700": "180 90 26",
    "--color-warning-800": "130 68 23",
    "--color-warning-900": "108 56 19",
    "--color-warning-950": "84 45 18",

    /* Info */
    "--color-info-0": "236 248 254",
    "--color-info-50": "199 235 252",
    "--color-info-100": "162 221 250",
    "--color-info-200": "124 207 248",
    "--color-info-300": "87 194 246",
    "--color-info-400": "50 180 244",
    "--color-info-500": "13 166 242",
    "--color-info-600": "11 141 205",
    "--color-info-700": "9 115 168",
    "--color-info-800": "7 90 131",
    "--color-info-900": "5 64 93",
    "--color-info-950": "3 38 56",

    /* Typography */
    "--color-typography-0": "254 254 255",
    "--color-typography-50": "245 245 245",
    "--color-typography-100": "229 229 229",
    "--color-typography-200": "115 115 115",
    "--color-typography-300": "163 163 163",
    "--color-typography-400": "163 163 163",
    "--color-typography-500": "140 140 140",
    "--color-typography-600": "115 115 115",
    "--color-typography-700": "82 82 82",
    "--color-typography-800": "245 245 245",
    "--color-typography-900": "38 38 39",
    "--color-typography-950": "23 23 23",

    /* Outline */
    "--color-outline-0": "253 254 254",
    "--color-outline-50": "243 243 243",
    "--color-outline-100": "230 230 230",
    "--color-outline-200": "105 102 114",
    "--color-outline-300": "211 211 211",
    "--color-outline-400": "165 163 163",
    "--color-outline-500": "140 141 141",
    "--color-outline-600": "115 116 116",
    "--color-outline-700": "83 82 82",
    "--color-outline-800": "65 65 65",
    "--color-outline-900": "39 38 36",
    "--color-outline-950": "26 23 23",

    /* Background */
    "--color-background-0": "253 252 255",
    "--color-background-50": "246 246 246",
    "--color-background-100": "241 235 255",
    "--color-background-200": "221 216 233",
    "--color-background-300": "241 235 255",
    "--color-background-400": "241 235 255",
    "--color-background-500": "105 102 114",
    "--color-background-600": "75 72 84",
    "--color-background-700": "254 254 255",
    "--color-background-800": "65 64 64",
    "--color-background-900": "21 20 23",
    "--color-background-950": "8 10 11",

    /* Background Special */
    "--color-background-error": "254 241 241",
    "--color-background-warning": "255 243 234",
    "--color-background-success": "237 252 242",
    "--color-background-muted": "247 248 247",
    "--color-background-info": "235 248 254",

    /* Focus Ring Indicator  */
    "--color-indicator-primary": "55 55 55",
    "--color-indicator-info": "83 153 236",
    "--color-indicator-error": "185 28 28",
  }),
  dark: vars({
    "--color-primary-0": "29 17 37",
    "--color-primary-50": "48 32 60",
    "--color-primary-100": "91 65 109",
    "--color-primary-200": "121 90 144",
    "--color-primary-300": "152 115 178",
    "--color-primary-400": "182 140 212",
    "--color-primary-500": "197 163 221",
    "--color-primary-600": "211 186 229",
    "--color-primary-700": "226 209 238",
    "--color-primary-800": "240 232 246",
    "--color-primary-900": "248 244 251",
    "--color-primary-950": "253 248 255",

    /* Secondary  */
    "--color-secondary-0": "45 28 58",
    "--color-secondary-50": "60 40 75",
    "--color-secondary-100": "91 65 109",
    "--color-secondary-200": "121 90 144",
    "--color-secondary-300": "152 115 178",
    "--color-secondary-400": "182 140 212",
    "--color-secondary-500": "197 163 221",
    "--color-secondary-600": "211 186 229",
    "--color-secondary-700": "226 209 238",
    "--color-secondary-800": "240 232 246",
    "--color-secondary-900": "248 244 251",
    "--color-secondary-950": "253 248 255",

    /* Tertiary */
    "--color-tertiary-0": "84 49 18",
    "--color-tertiary-50": "108 61 19",
    "--color-tertiary-100": "130 73 23",
    "--color-tertiary-200": "180 98 26",
    "--color-tertiary-300": "215 117 31",
    "--color-tertiary-400": "231 129 40",
    "--color-tertiary-500": "251 157 75",
    "--color-tertiary-600": "253 180 116",
    "--color-tertiary-700": "254 209 170",
    "--color-tertiary-800": "255 233 213",
    "--color-tertiary-900": "255 242 229",
    "--color-tertiary-950": "255 250 245",

    /* Error */
    "--color-error-0": "83 19 19",
    "--color-error-50": "127 29 29",
    "--color-error-100": "153 27 27",
    "--color-error-200": "185 28 28",
    "--color-error-300": "220 38 38",
    "--color-error-400": "230 53 53",
    "--color-error-500": "239 68 68",
    "--color-error-600": "249 97 96",
    "--color-error-700": "229 91 90",
    "--color-error-800": "254 202 202",
    "--color-error-900": "254 226 226",
    "--color-error-950": "254 233 233",

    /* Success */
    "--color-success-0": "27 50 36",
    "--color-success-50": "20 83 45",
    "--color-success-100": "22 101 52",
    "--color-success-200": "32 111 62",
    "--color-success-300": "42 121 72",
    "--color-success-400": "52 131 82",
    "--color-success-500": "72 151 102",
    "--color-success-600": "102 181 132",
    "--color-success-700": "132 211 162",
    "--color-success-800": "162 241 192",
    "--color-success-900": "202 255 232",
    "--color-success-950": "228 255 244",

    /* Warning */
    "--color-warning-0": "84 45 18",
    "--color-warning-50": "108 56 19",
    "--color-warning-100": "130 68 23",
    "--color-warning-200": "180 90 26",
    "--color-warning-300": "215 108 31",
    "--color-warning-400": "231 120 40",
    "--color-warning-500": "251 149 75",
    "--color-warning-600": "253 173 116",
    "--color-warning-700": "254 205 170",
    "--color-warning-800": "255 231 213",
    "--color-warning-900": "255 244 237",
    "--color-warning-950": "255 249 245",

    /* Info */
    "--color-info-0": "3 38 56",
    "--color-info-50": "5 64 93",
    "--color-info-100": "7 90 131",
    "--color-info-200": "9 115 168",
    "--color-info-300": "11 141 205",
    "--color-info-400": "13 166 242",
    "--color-info-500": "50 180 244",
    "--color-info-600": "87 194 246",
    "--color-info-700": "124 207 248",
    "--color-info-800": "162 221 250",
    "--color-info-900": "199 235 252",
    "--color-info-950": "236 248 254",

    /* Typography */
    "--color-typography-0": "23 23 23",
    "--color-typography-50": "38 38 39",
    "--color-typography-100": "64 64 64",
    "--color-typography-200": "82 82 82",
    "--color-typography-300": "115 115 115",
    "--color-typography-400": "140 140 140",
    "--color-typography-500": "163 163 163",
    "--color-typography-600": "212 212 212",
    "--color-typography-700": "219 219 220",
    "--color-typography-800": "229 229 229",
    "--color-typography-900": "245 245 245",
    "--color-typography-950": "254 254 255",
    /* Outline */
    "--color-outline-0": "26 23 23",
    "--color-outline-50": "39 38 36",
    "--color-outline-100": "65 65 65",
    "--color-outline-200": "83 82 82",
    "--color-outline-300": "115 116 116",
    "--color-outline-400": "140 141 141",
    "--color-outline-500": "165 163 163",
    "--color-outline-600": "211 211 211",
    "--color-outline-700": "221 220 219",
    "--color-outline-800": "230 230 230",
    "--color-outline-900": "243 243 243",
    "--color-outline-950": "253 254 254",

    /* Background */
    "--color-background-0": "11 10 11",
    "--color-background-50": "21 20 23",
    "--color-background-100": "28 26 32",
    "--color-background-200": "37 34 43",
    "--color-background-300": "46 43 54",
    "--color-background-400": "75 72 84",
    "--color-background-500": "105 102 114",
    "--color-background-600": "134 131 143",
    "--color-background-700": "242 237 255",
    "--color-background-800": "221 216 233",
    "--color-background-900": "245 241 255",
    "--color-background-950": "253 252 255",

    /* Background Special */
    "--color-background-error": "66 43 43",
    "--color-background-warning": "65 47 35",
    "--color-background-success": "28 43 33",
    "--color-background-muted": "51 51 51",
    "--color-background-info": "26 40 46",

    /* Focus Ring Indicator  */
    "--color-indicator-primary": "247 247 247",
    "--color-indicator-info": "161 199 245",
    "--color-indicator-error": "232 70 69",
  }),
};
