window.BENCHMARK_DATA = {
  "lastUpdate": 1703656872148,
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
          "id": "e9e2b20ae2a1ec19763e3beb49d7770ae84426a1",
          "message": "Slightly optimized FullNode",
          "timestamp": "2023-12-27T14:44:14+09:00",
          "tree_id": "3079199eb5d6660ea78a5af483aec226128c61d9",
          "url": "https://github.com/greymistcube/libplanet/commit/e9e2b20ae2a1ec19763e3beb49d7770ae84426a1"
        },
        "date": 1703656857961,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7964216.125,
            "unit": "ns",
            "range": "± 191894.6890963244"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20611933.57894737,
            "unit": "ns",
            "range": "± 699430.6145983987"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49616088.35,
            "unit": "ns",
            "range": "± 1112601.929923597"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 101977323.86666666,
            "unit": "ns",
            "range": "± 1814092.532343685"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 208648705.26666668,
            "unit": "ns",
            "range": "± 2485871.7032699436"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 65314.42391304348,
            "unit": "ns",
            "range": "± 9458.95666159938"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 339262.7826086957,
            "unit": "ns",
            "range": "± 51390.077896574134"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 294473.43956043955,
            "unit": "ns",
            "range": "± 18406.68658166784"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 310854.03846153844,
            "unit": "ns",
            "range": "± 26358.274474929625"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4173772.423076923,
            "unit": "ns",
            "range": "± 214128.91248278206"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4170419.533333333,
            "unit": "ns",
            "range": "± 76601.2433374165"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19169.554347826088,
            "unit": "ns",
            "range": "± 2704.937062760864"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 97983.91397849462,
            "unit": "ns",
            "range": "± 17525.01314869935"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 107769.87777777777,
            "unit": "ns",
            "range": "± 20350.843077711983"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 105915.36458333333,
            "unit": "ns",
            "range": "± 22325.71826303505"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5830.056701030928,
            "unit": "ns",
            "range": "± 853.9758116338365"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17981.663157894738,
            "unit": "ns",
            "range": "± 1829.2145076828965"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1688877.5,
            "unit": "ns",
            "range": "± 43857.23208419515"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2780915.2666666666,
            "unit": "ns",
            "range": "± 164673.23358623983"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2153566.9583333335,
            "unit": "ns",
            "range": "± 200888.71711466822"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9099732.25862069,
            "unit": "ns",
            "range": "± 263091.8040305452"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3356147.6836734693,
            "unit": "ns",
            "range": "± 202612.7158612003"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3660219.375,
            "unit": "ns",
            "range": "± 252526.84724883578"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4455107.897435897,
            "unit": "ns",
            "range": "± 228242.6193802852"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4274427.947916667,
            "unit": "ns",
            "range": "± 275220.9075957317"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 19328972.958333332,
            "unit": "ns",
            "range": "± 3624321.8910168414"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5520782.678013393,
            "unit": "ns",
            "range": "± 54771.32860540684"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1674302.6909466912,
            "unit": "ns",
            "range": "± 33903.62048746014"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1059569.5263020834,
            "unit": "ns",
            "range": "± 8988.351470847954"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2629858.0186298075,
            "unit": "ns",
            "range": "± 12653.869359088932"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 797610.2677734375,
            "unit": "ns",
            "range": "± 6801.84121738591"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 747063.7757161459,
            "unit": "ns",
            "range": "± 12298.167574864037"
          }
        ]
      }
    ]
  }
}