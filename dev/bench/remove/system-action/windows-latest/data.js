window.BENCHMARK_DATA = {
  "lastUpdate": 1682410990174,
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
          "id": "830a7b220f7d384755e957739e878ab6922828dc",
          "message": "Fix",
          "timestamp": "2023-04-25T17:03:15+09:00",
          "tree_id": "f397dccc7d29e7e3f2177ef9835d74c4f100604b",
          "url": "https://github.com/greymistcube/libplanet/commit/830a7b220f7d384755e957739e878ab6922828dc"
        },
        "date": 1682410965807,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1457579.1666666667,
            "unit": "ns",
            "range": "± 90935.62895826415"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2677583.3333333335,
            "unit": "ns",
            "range": "± 104030.53220668282"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2345941.414141414,
            "unit": "ns",
            "range": "± 186910.98886144566"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5655782.142857143,
            "unit": "ns",
            "range": "± 303762.53810632846"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 54211.34020618557,
            "unit": "ns",
            "range": "± 5165.528294389399"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7677404.761904762,
            "unit": "ns",
            "range": "± 182000.89965764034"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20260053.333333332,
            "unit": "ns",
            "range": "± 259424.57991999653"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50992320,
            "unit": "ns",
            "range": "± 643851.4282924948"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 102015400,
            "unit": "ns",
            "range": "± 1004540.515431238"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 204691326.66666666,
            "unit": "ns",
            "range": "± 1186416.8368101772"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4910331.640625,
            "unit": "ns",
            "range": "± 20562.526278350786"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1529008.7630208333,
            "unit": "ns",
            "range": "± 4427.613993753199"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1178361.6471354167,
            "unit": "ns",
            "range": "± 4518.025337768814"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2674823.75,
            "unit": "ns",
            "range": "± 19617.790199981664"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 822090.9807477678,
            "unit": "ns",
            "range": "± 2442.130190625239"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 765245.9309895834,
            "unit": "ns",
            "range": "± 3992.258876823304"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3385674.4680851065,
            "unit": "ns",
            "range": "± 131932.1539541954"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3602970.4545454546,
            "unit": "ns",
            "range": "± 130804.37475712552"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4402368.518518519,
            "unit": "ns",
            "range": "± 122562.9917698118"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4480570,
            "unit": "ns",
            "range": "± 132170.1336966083"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7137118.75,
            "unit": "ns",
            "range": "± 252828.73747266404"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 294454.54545454547,
            "unit": "ns",
            "range": "± 9177.012412445665"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 300115.7894736842,
            "unit": "ns",
            "range": "± 6136.7982203801375"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 252766.66666666666,
            "unit": "ns",
            "range": "± 12764.290701684804"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4185064.285714286,
            "unit": "ns",
            "range": "± 68664.26242279119"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3654135.714285714,
            "unit": "ns",
            "range": "± 46982.77273709943"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26922.105263157893,
            "unit": "ns",
            "range": "± 2327.229150882372"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 109378.57142857143,
            "unit": "ns",
            "range": "± 9157.873633357041"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 106347.95918367348,
            "unit": "ns",
            "range": "± 7957.489885426647"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 122620.40816326531,
            "unit": "ns",
            "range": "± 15017.831045667725"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 10732.98969072165,
            "unit": "ns",
            "range": "± 1060.7310420849444"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 30687.113402061856,
            "unit": "ns",
            "range": "± 2304.764972997467"
          }
        ]
      }
    ]
  }
}