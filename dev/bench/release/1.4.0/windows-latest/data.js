window.BENCHMARK_DATA = {
  "lastUpdate": 1686127697511,
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
          "id": "c904ed9407d3095e90ee6036d60d223ecf31973c",
          "message": "Release 1.4.0",
          "timestamp": "2023-06-07T17:32:01+09:00",
          "tree_id": "1f32bb1e8779c3a4e467e6db02a8d55373fb9578",
          "url": "https://github.com/greymistcube/libplanet/commit/c904ed9407d3095e90ee6036d60d223ecf31973c"
        },
        "date": 1686127675140,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1488490.8163265307,
            "unit": "ns",
            "range": "± 148352.14798477935"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2765265.789473684,
            "unit": "ns",
            "range": "± 139920.83242808562"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2318695.87628866,
            "unit": "ns",
            "range": "± 166993.54398544235"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5971556,
            "unit": "ns",
            "range": "± 378642.98109875683"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 52246.8085106383,
            "unit": "ns",
            "range": "± 3710.945800888379"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7685538,
            "unit": "ns",
            "range": "± 461993.7745612308"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22696670.833333332,
            "unit": "ns",
            "range": "± 588432.260132373"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 57466340,
            "unit": "ns",
            "range": "± 1071555.706704709"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 115254533.33333333,
            "unit": "ns",
            "range": "± 1372255.3462231783"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 220959280.95238096,
            "unit": "ns",
            "range": "± 5005976.12535448"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5016907.310267857,
            "unit": "ns",
            "range": "± 22246.445821205936"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1584275.2734375,
            "unit": "ns",
            "range": "± 7764.461173868605"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1219509.2447916667,
            "unit": "ns",
            "range": "± 7931.596403764132"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2723691.1067708335,
            "unit": "ns",
            "range": "± 9229.028007396528"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 870730.1953125,
            "unit": "ns",
            "range": "± 3236.731761841634"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 798511.6796875,
            "unit": "ns",
            "range": "± 2954.0892907157295"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3355970,
            "unit": "ns",
            "range": "± 212965.42115108878"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3475907,
            "unit": "ns",
            "range": "± 207214.9614616072"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4256512.121212121,
            "unit": "ns",
            "range": "± 133191.37021025366"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4605033.333333333,
            "unit": "ns",
            "range": "± 193197.8739286901"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7305218.918918919,
            "unit": "ns",
            "range": "± 362778.85332250735"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 285955.10204081633,
            "unit": "ns",
            "range": "± 11402.687205663588"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 275983.3333333333,
            "unit": "ns",
            "range": "± 5010.37159594094"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 239245.91836734695,
            "unit": "ns",
            "range": "± 19994.31449273779"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4381661.29032258,
            "unit": "ns",
            "range": "± 129094.01400379842"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3962592.1052631577,
            "unit": "ns",
            "range": "± 135000.79555637253"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22889.690721649484,
            "unit": "ns",
            "range": "± 2792.082725317641"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 96894.89795918367,
            "unit": "ns",
            "range": "± 9109.306133669184"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 80402.0202020202,
            "unit": "ns",
            "range": "± 7659.301132369873"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 116910.20408163265,
            "unit": "ns",
            "range": "± 20183.623502480423"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6427.551020408163,
            "unit": "ns",
            "range": "± 1442.8480292513177"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23681.632653061224,
            "unit": "ns",
            "range": "± 4003.5383046061347"
          }
        ]
      }
    ]
  }
}