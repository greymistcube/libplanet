window.BENCHMARK_DATA = {
  "lastUpdate": 1696900598225,
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
          "id": "134c760b2b332ae6eaa43e5022068dac9c89d3ea",
          "message": "Prepare 3.6.1",
          "timestamp": "2023-10-10T09:56:08+09:00",
          "tree_id": "3755ab0ad6784245232eca019359e9709e05e21e",
          "url": "https://github.com/greymistcube/libplanet/commit/134c760b2b332ae6eaa43e5022068dac9c89d3ea"
        },
        "date": 1696900589088,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 71110.85416666667,
            "unit": "ns",
            "range": "± 16019.779987962364"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10189367.721649485,
            "unit": "ns",
            "range": "± 822107.9330936641"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 28239651.611111112,
            "unit": "ns",
            "range": "± 1140075.8077900638"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 69246063.225,
            "unit": "ns",
            "range": "± 2429513.780499875"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 141527069.06451613,
            "unit": "ns",
            "range": "± 6419849.311492948"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 285009927.1666667,
            "unit": "ns",
            "range": "± 9435419.592329418"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 360373.32258064515,
            "unit": "ns",
            "range": "± 39202.855396270534"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 344916.1505376344,
            "unit": "ns",
            "range": "± 40135.60313729549"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 301757.6391752577,
            "unit": "ns",
            "range": "± 39450.68444885377"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5229353.8367346935,
            "unit": "ns",
            "range": "± 470481.42211636034"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4771924.97979798,
            "unit": "ns",
            "range": "± 436172.20569880743"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 28759.858585858587,
            "unit": "ns",
            "range": "± 10345.250563649774"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 126248.84375,
            "unit": "ns",
            "range": "± 26296.56885015835"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 128832.2,
            "unit": "ns",
            "range": "± 20796.21302453169"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 121756.53608247422,
            "unit": "ns",
            "range": "± 24119.346410982107"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7645.691358024691,
            "unit": "ns",
            "range": "± 1271.2400308554568"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 34444.33,
            "unit": "ns",
            "range": "± 12189.781992776332"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1718681.3789473684,
            "unit": "ns",
            "range": "± 141817.84844488272"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3475742.789473684,
            "unit": "ns",
            "range": "± 243407.7091764986"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2711508.2978723403,
            "unit": "ns",
            "range": "± 251314.75061518085"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 12114960.120879121,
            "unit": "ns",
            "range": "± 1060163.902954369"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5981188.050502232,
            "unit": "ns",
            "range": "± 169479.34981330213"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1937856.9903320312,
            "unit": "ns",
            "range": "± 43704.87411468659"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1289628.4802083333,
            "unit": "ns",
            "range": "± 22537.699176009337"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3156450.8298339844,
            "unit": "ns",
            "range": "± 60699.20292549871"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1014456.1259765625,
            "unit": "ns",
            "range": "± 24770.3926126166"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 961594.4119370404,
            "unit": "ns",
            "range": "± 18581.460599498132"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4025657.4895833335,
            "unit": "ns",
            "range": "± 387999.42675304896"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4458585,
            "unit": "ns",
            "range": "± 333413.95310208795"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5547600.21875,
            "unit": "ns",
            "range": "± 351109.91230886814"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5237891.875,
            "unit": "ns",
            "range": "± 469891.8758377741"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 14206549.622222222,
            "unit": "ns",
            "range": "± 1168366.3996632756"
          }
        ]
      }
    ]
  }
}