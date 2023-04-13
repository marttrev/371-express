import express, {Application, Request, Response} from "express"
import cors from "cors"

const app: Application = express()
const PORT = process.env.PORT ?? 8000
const possibleSolutions: Array<string> = [
    "ABOVE", "BATHE", "CREAM", "DOLLS", "EVERY", "FROWN", "GROVE",
    "HIRED", "IONIC", "JUMPY", "KINDS", "LEMON", "MAKER", "NIECE",
    "OUTER", "PHONE", "QUILL", "RHYME", "STYLE", "TROVE", "ULNAR",
    "VOICE", "WISPY", "XENON", "YELLS", "ZONKS"
  ]

app.get("/", (req: Request, res: Response) => {
    res.send("Hello World!")
})

app.listen(PORT, () => {
    console.log(`Server is listening to port ${PORT}`)
})

app.get("/word-generator", cors(), (req: Request, res: Response) => {
    res.send({ solution: possibleSolutions[Math.trunc(Math.random() * 25)]})
})

