window.BENCHMARK_DATA = {
  "lastUpdate": 1694089004715,
  "repoUrl": "https://github.com/greymistcube/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "distinct": true,
          "id": "2ee051d04d50883dc27141ddbc1225fb504963ce",
          "message": "Prepare 3.4.0",
          "timestamp": "2023-09-07T21:00:32+09:00",
          "tree_id": "d08370af5794578e62bc1c40dd2c906d7efde68b",
          "url": "https://github.com/greymistcube/libplanet/commit/2ee051d04d50883dc27141ddbc1225fb504963ce"
        },
        "date": 1694088975981,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8764678.566666666,
            "unit": "ns",
            "range": "± 101686.89615219193"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21228111.233333334,
            "unit": "ns",
            "range": "± 291093.09291738534"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52015021.63333333,
            "unit": "ns",
            "range": "± 808967.670736853"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 105430578.1,
            "unit": "ns",
            "range": "± 783797.8033824248"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 216536724.96666667,
            "unit": "ns",
            "range": "± 1690469.9847216145"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 73363.90425531915,
            "unit": "ns",
            "range": "± 6405.220604376899"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 321394.3714285714,
            "unit": "ns",
            "range": "± 15179.712521548388"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 302622.4770114943,
            "unit": "ns",
            "range": "± 16422.23051443478"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 315631.14285714284,
            "unit": "ns",
            "range": "± 10067.723289984559"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4179279.8571428573,
            "unit": "ns",
            "range": "± 61442.49661720254"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3701993.0625,
            "unit": "ns",
            "range": "± 71910.16377070188"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19196.102150537634,
            "unit": "ns",
            "range": "± 2182.90855103214"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 90095.4623655914,
            "unit": "ns",
            "range": "± 8397.485824002868"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 104226.82,
            "unit": "ns",
            "range": "± 16886.701436086183"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 118259.03125,
            "unit": "ns",
            "range": "± 12495.668999973866"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9024.239583333334,
            "unit": "ns",
            "range": "± 1126.7710480071776"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24632.55154639175,
            "unit": "ns",
            "range": "± 4116.076209437652"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1585582.3484848484,
            "unit": "ns",
            "range": "± 162799.80110028738"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3044237.530769231,
            "unit": "ns",
            "range": "± 141005.11418705806"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1989631.4,
            "unit": "ns",
            "range": "± 156610.43118879857"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5473005.716666667,
            "unit": "ns",
            "range": "± 209025.74818631928"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3431372.3,
            "unit": "ns",
            "range": "± 51600.70723933927"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3696413.052631579,
            "unit": "ns",
            "range": "± 77625.11829404025"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4420031.65,
            "unit": "ns",
            "range": "± 66204.86061204666"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3919142.489361702,
            "unit": "ns",
            "range": "± 152080.4784430688"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6741922.986486486,
            "unit": "ns",
            "range": "± 202121.64509118727"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5643333.405048077,
            "unit": "ns",
            "range": "± 22373.64538818374"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1696339.3395833333,
            "unit": "ns",
            "range": "± 6327.8131822347195"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 991622.8764322917,
            "unit": "ns",
            "range": "± 3874.3059291353748"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2770396.7975260415,
            "unit": "ns",
            "range": "± 57371.281245241196"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 772281.6057291667,
            "unit": "ns",
            "range": "± 4070.7488206579856"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 710122.0486979167,
            "unit": "ns",
            "range": "± 1705.3026581396107"
          }
        ]
      }
    ]
  }
}