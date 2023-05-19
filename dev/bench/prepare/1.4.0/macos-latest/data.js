window.BENCHMARK_DATA = {
  "lastUpdate": 1684481573177,
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
          "id": "590839db14d220a02292eb1e2ec496c6c0498312",
          "message": "Prepare 1.4.0",
          "timestamp": "2023-05-19T16:17:33+09:00",
          "tree_id": "a78e8827bdaff2136046290e89b28ef3453a6253",
          "url": "https://github.com/greymistcube/libplanet/commit/590839db14d220a02292eb1e2ec496c6c0498312"
        },
        "date": 1684481543557,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7604981.538461538,
            "unit": "ns",
            "range": "± 89750.00717420156"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18859660.5,
            "unit": "ns",
            "range": "± 408811.21977715363"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 47347898.21428572,
            "unit": "ns",
            "range": "± 818152.3779526439"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 95156197.28571428,
            "unit": "ns",
            "range": "± 2716134.1867828183"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 194878931.93333334,
            "unit": "ns",
            "range": "± 3495094.944308982"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 60727.0206185567,
            "unit": "ns",
            "range": "± 7925.282055942054"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 305702.2916666667,
            "unit": "ns",
            "range": "± 15115.10732695212"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 289672.81176470587,
            "unit": "ns",
            "range": "± 14567.294156279479"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 286862.5053763441,
            "unit": "ns",
            "range": "± 20748.836447012203"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3983139.3125,
            "unit": "ns",
            "range": "± 74603.91412494723"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3569087,
            "unit": "ns",
            "range": "± 101401.21057080205"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17429.823529411766,
            "unit": "ns",
            "range": "± 1608.205315727757"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 86929.89247311828,
            "unit": "ns",
            "range": "± 10484.518887038172"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 77962.35227272728,
            "unit": "ns",
            "range": "± 7262.866641450125"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 104391.71276595745,
            "unit": "ns",
            "range": "± 18686.592214580724"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4990.388235294117,
            "unit": "ns",
            "range": "± 590.9735932807677"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16037.117647058823,
            "unit": "ns",
            "range": "± 1618.987304075082"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1488183.1304347827,
            "unit": "ns",
            "range": "± 133569.20653121514"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2909025.074712644,
            "unit": "ns",
            "range": "± 168271.7530878861"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2471171.2989690723,
            "unit": "ns",
            "range": "± 229943.9322880401"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6328666.205128205,
            "unit": "ns",
            "range": "± 309033.1549280151"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3124332.214285714,
            "unit": "ns",
            "range": "± 194981.52771106214"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3364384.95,
            "unit": "ns",
            "range": "± 76657.41604559106"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4218171.166666667,
            "unit": "ns",
            "range": "± 147680.50909798016"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4209070.337837838,
            "unit": "ns",
            "range": "± 211019.94636721586"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7287847.019230769,
            "unit": "ns",
            "range": "± 276056.680566708"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6132814.280133928,
            "unit": "ns",
            "range": "± 78937.76533765926"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1854989.148158482,
            "unit": "ns",
            "range": "± 10814.92072925399"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1238281.0555245536,
            "unit": "ns",
            "range": "± 11680.564822848926"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2429113.887276786,
            "unit": "ns",
            "range": "± 21181.40482859126"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 830022.728376116,
            "unit": "ns",
            "range": "± 4891.824559152598"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 740982.3628255208,
            "unit": "ns",
            "range": "± 8929.06906042302"
          }
        ]
      }
    ]
  }
}