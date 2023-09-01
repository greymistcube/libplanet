window.BENCHMARK_DATA = {
  "lastUpdate": 1693546671234,
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
          "id": "5a1e57cbc860d5c0098ae5e3cd0da8fd9360f901",
          "message": "Cleanup",
          "timestamp": "2023-09-01T14:19:05+09:00",
          "tree_id": "376d8fea536cfb7fb26b670d17d90980e62eaa03",
          "url": "https://github.com/greymistcube/libplanet/commit/5a1e57cbc860d5c0098ae5e3cd0da8fd9360f901"
        },
        "date": 1693546645199,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1353550,
            "unit": "ns",
            "range": "± 74032.85229133621"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2529036.4864864866,
            "unit": "ns",
            "range": "± 126035.55877274218"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1730095.918367347,
            "unit": "ns",
            "range": "± 104297.87626542452"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4640647.5,
            "unit": "ns",
            "range": "± 242221.55878033375"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 50305.434782608696,
            "unit": "ns",
            "range": "± 3812.771024571216"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8323438.888888889,
            "unit": "ns",
            "range": "± 168316.43916388694"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20990500,
            "unit": "ns",
            "range": "± 303671.06698379567"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53384793.75,
            "unit": "ns",
            "range": "± 1030143.6601877429"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 107192720,
            "unit": "ns",
            "range": "± 2462180.17214526"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 212469211.7647059,
            "unit": "ns",
            "range": "± 4287008.469621087"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4575560.980902778,
            "unit": "ns",
            "range": "± 96556.21996442176"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1443227.3716517857,
            "unit": "ns",
            "range": "± 12140.903875400782"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1074062.5,
            "unit": "ns",
            "range": "± 3212.815498775655"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2713792.1354166665,
            "unit": "ns",
            "range": "± 27869.173078524665"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 865073.18359375,
            "unit": "ns",
            "range": "± 6626.446735402593"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 778038.6648995535,
            "unit": "ns",
            "range": "± 5246.3399627434555"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3229835.8974358975,
            "unit": "ns",
            "range": "± 110534.36352360362"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3437913.6363636362,
            "unit": "ns",
            "range": "± 80472.79513957346"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4271285.714285715,
            "unit": "ns",
            "range": "± 100468.63831920031"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3892106.25,
            "unit": "ns",
            "range": "± 76403.29372263126"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6014948.275862069,
            "unit": "ns",
            "range": "± 142946.35762283512"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 269516.27906976745,
            "unit": "ns",
            "range": "± 14523.513271811953"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 248623.80952380953,
            "unit": "ns",
            "range": "± 8961.674754300018"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 233978.3505154639,
            "unit": "ns",
            "range": "± 17224.22728554731"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4270050,
            "unit": "ns",
            "range": "± 76691.78574006476"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3890913.3333333335,
            "unit": "ns",
            "range": "± 50594.22421393102"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25362.244897959183,
            "unit": "ns",
            "range": "± 3704.7340933315695"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 95668.42105263157,
            "unit": "ns",
            "range": "± 7363.7736503792785"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 87916.49484536082,
            "unit": "ns",
            "range": "± 11662.901300816075"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 97235.71428571429,
            "unit": "ns",
            "range": "± 13786.563382399081"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6143.010752688172,
            "unit": "ns",
            "range": "± 949.5305303906729"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20979.166666666668,
            "unit": "ns",
            "range": "± 2666.553725678488"
          }
        ]
      }
    ]
  }
}