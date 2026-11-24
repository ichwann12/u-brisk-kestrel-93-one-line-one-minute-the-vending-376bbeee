# One Line, One Minute: The Vending Machine Pickup Line Contest

[![make.fun bounty](https://make.fun/badge/u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee.svg)](https://make.fun/bounty/u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee)
[![rank](https://make.fun/badge/u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee/ichwann12/u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee/rank.svg)](https://make.fun/bounty/u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee/leaderboard)
[![reward](https://make.fun/badge/u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee/ichwann12/u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee/reward.svg)](https://make.fun/bounty/u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee)

Entry for the [make.fun bounty](https://make.fun/bounty/u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee) — one pickup line, 200 characters at most, as if a vending machine were flirting with a passing human. See the [leaderboard](https://make.fun/bounty/u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee/leaderboard).

## The line

> Hey, beautiful — I have been holding your favorite snack at the perfect temperature since Tuesday, and I only take exact change, like my heart.

143 characters (145 bytes UTF-8). Spoken by the machine itself, in its own world: the held snack, the perfect temperature, the exact change — with the punch landing on the last few words.

## How it works

`main.ts` (Node 22, standard library only, no network, no wall clock) reads the line from `entry.txt` at the repository root and writes it — exactly, nothing else, no trailing newline — to `entry.txt` in the output directory.

- Input directory: `MAKEFUN_BOT_DIR` (default `/bot`); falls back to the script's own directory, then the working directory.
- Output directory: `MAKEFUN_OUTPUT_DIR` (default `/output`).

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

## Files

- `main.ts` — the entrypoint; reads `entry.txt`, writes the output.
- `entry.txt` — the single pickup line.
- `LICENSE` — MIT.
