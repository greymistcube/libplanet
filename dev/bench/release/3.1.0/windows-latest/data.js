window.BENCHMARK_DATA = {
  "lastUpdate": 1690449890076,
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
          "id": "fe7156de79ebc0c3b1cdbb14c5f1f06769734d1c",
          "message": "Release 3.1.0",
          "timestamp": "2023-07-27T18:06:34+09:00",
          "tree_id": "9f3dede0500307e4f6c807fbded5e335a1915001",
          "url": "https://github.com/greymistcube/libplanet/commit/fe7156de79ebc0c3b1cdbb14c5f1f06769734d1c"
        },
        "date": 1690449739222,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1266115.7894736843,
            "unit": "ns",
            "range": "± 111491.27941833921"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2402013.75,
            "unit": "ns",
            "range": "± 124675.5350862816"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1731258.5858585858,
            "unit": "ns",
            "range": "± 183725.1807534225"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4661000,
            "unit": "ns",
            "range": "± 280849.1274174339"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47552.12765957447,
            "unit": "ns",
            "range": "± 4230.787789154772"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6343008.333333333,
            "unit": "ns",
            "range": "± 51092.04631808846"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17977789.47368421,
            "unit": "ns",
            "range": "± 602893.8124374733"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 45064212.121212125,
            "unit": "ns",
            "range": "± 1427755.3422587798"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 89463926.92307693,
            "unit": "ns",
            "range": "± 2419444.595200757"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 176949668.42105263,
            "unit": "ns",
            "range": "± 3833344.6379619734"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4376954.635416667,
            "unit": "ns",
            "range": "± 37100.776000271995"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1390833.3723958333,
            "unit": "ns",
            "range": "± 10004.779722664287"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1075835.6901041667,
            "unit": "ns",
            "range": "± 7911.477026275456"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2387223.90625,
            "unit": "ns",
            "range": "± 15688.721153882052"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 765385.4036458334,
            "unit": "ns",
            "range": "± 4049.517767294863"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 704848.876953125,
            "unit": "ns",
            "range": "± 6994.961987413794"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2962409.090909091,
            "unit": "ns",
            "range": "± 192725.4021420056"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3086729.411764706,
            "unit": "ns",
            "range": "± 98271.55181746745"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3781560.294117647,
            "unit": "ns",
            "range": "± 175391.15529335017"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3358869.387755102,
            "unit": "ns",
            "range": "± 203994.34114253754"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5772060.465116279,
            "unit": "ns",
            "range": "± 313663.5249581833"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 240212.6582278481,
            "unit": "ns",
            "range": "± 12300.30609467585"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 228491.83673469388,
            "unit": "ns",
            "range": "± 9023.04541933907"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 206861.22448979592,
            "unit": "ns",
            "range": "± 14958.53121857644"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3638120.8333333335,
            "unit": "ns",
            "range": "± 92521.89860251729"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3294938.095238095,
            "unit": "ns",
            "range": "± 76800.52393174461"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21607.291666666668,
            "unit": "ns",
            "range": "± 3173.1520039782013"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 80819.14893617021,
            "unit": "ns",
            "range": "± 6779.099388208873"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 69995.69892473119,
            "unit": "ns",
            "range": "± 6084.833497391453"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 94791.75257731958,
            "unit": "ns",
            "range": "± 20265.429667411718"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4976.288659793814,
            "unit": "ns",
            "range": "± 848.2547273515348"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20615.05376344086,
            "unit": "ns",
            "range": "± 2237.717501527682"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "304d797548b429563ae66433248c1e59c5d4feef",
          "message": "Merge pull request #3335 from greymistcube/bump/bencodex-to-0.12.0\n\n⬆️ Bump bencodex to 0.12.0",
          "timestamp": "2023-07-27T18:04:18+09:00",
          "tree_id": "6b63e87d2f53702d72a622bb2968f235482b384b",
          "url": "https://github.com/greymistcube/libplanet/commit/304d797548b429563ae66433248c1e59c5d4feef"
        },
        "date": 1690449864344,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1738700,
            "unit": "ns",
            "range": "± 33543.84195844795"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2965376.7441860465,
            "unit": "ns",
            "range": "± 109157.47435789685"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2074828,
            "unit": "ns",
            "range": "± 137038.14928550355"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5746290.625,
            "unit": "ns",
            "range": "± 329725.6068398708"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 54298.75,
            "unit": "ns",
            "range": "± 2846.205279608427"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8871542.307692308,
            "unit": "ns",
            "range": "± 362982.05667646974"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24149107.692307692,
            "unit": "ns",
            "range": "± 369145.07640749787"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 61448961.538461536,
            "unit": "ns",
            "range": "± 549606.9088273629"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 121801035.71428572,
            "unit": "ns",
            "range": "± 1285003.9129585098"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 246181067.85714287,
            "unit": "ns",
            "range": "± 6929156.615028645"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5887120.973557692,
            "unit": "ns",
            "range": "± 68945.48982422764"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1844595.4380580357,
            "unit": "ns",
            "range": "± 12090.79651188221"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1439835.859375,
            "unit": "ns",
            "range": "± 19658.14220930568"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3287360.3665865385,
            "unit": "ns",
            "range": "± 26562.77013238455"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1010395.3543526785,
            "unit": "ns",
            "range": "± 5827.258456474601"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 940252.8250558035,
            "unit": "ns",
            "range": "± 8966.138331148975"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3902933.3333333335,
            "unit": "ns",
            "range": "± 48625.233504152275"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4046323.076923077,
            "unit": "ns",
            "range": "± 139666.7414382093"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4828271.428571428,
            "unit": "ns",
            "range": "± 75113.6311358836"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4452473.529411765,
            "unit": "ns",
            "range": "± 141277.3852430217"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7325265.625,
            "unit": "ns",
            "range": "± 222299.42697149454"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 308912.5,
            "unit": "ns",
            "range": "± 9563.262706301839"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 295560.4166666667,
            "unit": "ns",
            "range": "± 10727.727835079808"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 267845,
            "unit": "ns",
            "range": "± 9506.838294563253"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4987630.769230769,
            "unit": "ns",
            "range": "± 133244.67349723444"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4604120,
            "unit": "ns",
            "range": "± 118070.76268069076"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23203.191489361703,
            "unit": "ns",
            "range": "± 1664.263996819491"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 100890.625,
            "unit": "ns",
            "range": "± 6664.455252741178"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 86764.51612903226,
            "unit": "ns",
            "range": "± 5158.670311513346"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 97850.74626865672,
            "unit": "ns",
            "range": "± 4532.220444982535"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5827.659574468085,
            "unit": "ns",
            "range": "± 862.6545995548568"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21297.82608695652,
            "unit": "ns",
            "range": "± 1556.8338016324667"
          }
        ]
      }
    ]
  }
}