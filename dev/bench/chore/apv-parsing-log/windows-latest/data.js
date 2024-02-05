window.BENCHMARK_DATA = {
  "lastUpdate": 1707149024390,
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
          "id": "c013e427c088698e17084b792a8cfc1d0093d31a",
          "message": "Added which string caused a parsing error to log",
          "timestamp": "2024-02-05T18:29:44+09:00",
          "tree_id": "4dc1b8a7501d78e6554f41916915a523e718fd6f",
          "url": "https://github.com/greymistcube/libplanet/commit/c013e427c088698e17084b792a8cfc1d0093d31a"
        },
        "date": 1707149001506,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 974557.4468085107,
            "unit": "ns",
            "range": "± 92072.03758600695"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1673762.1621621621,
            "unit": "ns",
            "range": "± 55169.35215694868"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1509409.1836734693,
            "unit": "ns",
            "range": "± 141602.20896897672"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10884734.782608695,
            "unit": "ns",
            "range": "± 874793.7054691945"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34725,
            "unit": "ns",
            "range": "± 1667.2772513399866"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5101420,
            "unit": "ns",
            "range": "± 35619.88208851904"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13137616.666666666,
            "unit": "ns",
            "range": "± 39939.29105150678"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32140566.666666668,
            "unit": "ns",
            "range": "± 179994.38747863646"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 64830428.571428575,
            "unit": "ns",
            "range": "± 211247.74893137068"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 130458966.66666667,
            "unit": "ns",
            "range": "± 524008.89941552206"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3310677.8645833335,
            "unit": "ns",
            "range": "± 12720.367796779577"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1095128.90625,
            "unit": "ns",
            "range": "± 4961.478715139288"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 744587.4232700893,
            "unit": "ns",
            "range": "± 2019.8935268355178"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1976163.984375,
            "unit": "ns",
            "range": "± 2805.4023521327777"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 621785.5318509615,
            "unit": "ns",
            "range": "± 973.1663152965687"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 556757.5846354166,
            "unit": "ns",
            "range": "± 1067.9236935507909"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2179046.6666666665,
            "unit": "ns",
            "range": "± 63862.87429049586"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2192270.212765957,
            "unit": "ns",
            "range": "± 65652.33501888571"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2772816.6666666665,
            "unit": "ns",
            "range": "± 58989.0144309041"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2873260.606060606,
            "unit": "ns",
            "range": "± 325479.7397432019"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12466010.98901099,
            "unit": "ns",
            "range": "± 1550058.5625102145"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 163052.63157894736,
            "unit": "ns",
            "range": "± 7080.9378228542455"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 158129.16666666666,
            "unit": "ns",
            "range": "± 7650.673126972205"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 146062.85714285713,
            "unit": "ns",
            "range": "± 3996.990464475646"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2772092.8571428573,
            "unit": "ns",
            "range": "± 40527.131734103845"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2416107.1428571427,
            "unit": "ns",
            "range": "± 31290.388405921178"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 9443.67816091954,
            "unit": "ns",
            "range": "± 771.995473752439"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 49577.90697674418,
            "unit": "ns",
            "range": "± 2692.152043726169"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43125,
            "unit": "ns",
            "range": "± 1324.7910886518782"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 49302.0618556701,
            "unit": "ns",
            "range": "± 9287.536219999396"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2157.1428571428573,
            "unit": "ns",
            "range": "± 398.1917892560415"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 8687.80487804878,
            "unit": "ns",
            "range": "± 462.05131559981066"
          }
        ]
      }
    ]
  }
}