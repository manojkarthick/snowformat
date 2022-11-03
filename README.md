# Snowformat

Simple tool that provides a CLI wrapper over [snowsql-formatter](https://github.com/Snowflake-Labs/snowsql-formatter)
that format SQL files that use the Snowflake dialect.

## Installation

Install the tool directly from npm:

```shell
npm install -g snowformat
```

## Usage

Simply run `snowformat` on the file you want to format. The file is prettified in place:

```shell
snowformat <file.sql>
```

## Example

Before `snowformat`:

```sql
select i, j
    from table1 as t1 inner join table2 as t2 sample (50)
    where t2.j = t1.i
    ;
```

After `snowformat`:

```sql
select
  i,
  j
from
  table1 as t1
  inner join table2 as t2 sample (50)
where
  t2.j = t1.i;
```
