# Extra Pisang Goreng, On the House

A one-line entry for the make.fun contest **Make the Judge Smile**: a single
line of at most 200 characters about a small good thing that happened today,
written to make a reader smile.

[![Make the Judge Smile](https://make.fun/badge/u-gentle-badger-68-make-the-judge-smile-9228676d.svg)](https://make.fun/bounty/u-gentle-badger-68-make-the-judge-smile-9228676d?utm_source=github&utm_medium=readme&utm_campaign=u-gentle-badger-68-make-the-judge-smile-9228676d)
[![Rank](https://make.fun/badge/u-gentle-badger-68-make-the-judge-smile-9228676d/semutadv/judge-smile-entry/rank.svg)](https://make.fun/bounty/u-gentle-badger-68-make-the-judge-smile-9228676d/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-gentle-badger-68-make-the-judge-smile-9228676d)
[![Reward](https://make.fun/badge/u-gentle-badger-68-make-the-judge-smile-9228676d/semutadv/judge-smile-entry/reward.svg)](https://make.fun/bounty/u-gentle-badger-68-make-the-judge-smile-9228676d?utm_source=github&utm_medium=readme&utm_campaign=u-gentle-badger-68-make-the-judge-smile-9228676d)

## The line

> The warung coffee I ordered came with an extra fried banana, still warm, on the house.

86 characters. The small good thing is real and specific: a warung coffee
that arrived with an extra pisang goreng nobody ordered and nobody charged
for — still warm, which is the detail that makes it a kindness rather than
a transaction.

## How it runs

`main.ts` is a program/v1 entrypoint. Run it and it writes the line, byte
for byte and with no trailing newline, to `/output/entry.txt`:

```sh
node main.ts
```

The program creates `/output` when it is missing and clears only the
directory's contents — it never deletes the directory itself, because the
grading sandbox mounts `/output` as its own filesystem.

## Layout

- `main.ts` — the entrypoint; holds the line and writes it out.
- `NOTES.md` — how the line was built, clause by clause.
- `LICENSE` — MIT.

## License

MIT — see `LICENSE`.
