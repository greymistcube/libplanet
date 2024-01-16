window.BENCHMARK_DATA = {
  "lastUpdate": 1705409172565,
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
          "id": "06fd4dd9c5d9888d1b7d2669c577f00520eb28ff",
          "message": "Docs",
          "timestamp": "2024-01-16T21:32:53+09:00",
          "tree_id": "5f14fdac4e17e4c8f554b2c10337981b433570d5",
          "url": "https://github.com/greymistcube/libplanet/commit/06fd4dd9c5d9888d1b7d2669c577f00520eb28ff"
        },
        "date": 1705409153559,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1046122.6804123712,
            "unit": "ns",
            "range": "± 140375.9746961966"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1775520,
            "unit": "ns",
            "range": "± 79133.41834083173"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1660086.8686868686,
            "unit": "ns",
            "range": "± 179274.75757440066"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 11230739.784946237,
            "unit": "ns",
            "range": "± 1004608.6108032087"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 36145.65217391304,
            "unit": "ns",
            "range": "± 2666.805021096344"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5243497.619047619,
            "unit": "ns",
            "range": "± 120640.20316232735"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14064700,
            "unit": "ns",
            "range": "± 252562.73336680984"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 35770121.428571425,
            "unit": "ns",
            "range": "± 298732.1135387702"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 70075146.15384616,
            "unit": "ns",
            "range": "± 526100.6947587515"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 135105893.33333334,
            "unit": "ns",
            "range": "± 1599398.947134591"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3375473.3537946427,
            "unit": "ns",
            "range": "± 7659.389676434247"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1067648.6478365385,
            "unit": "ns",
            "range": "± 1600.734022691463"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 760939.0775240385,
            "unit": "ns",
            "range": "± 997.7532402384809"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1977772.4739583333,
            "unit": "ns",
            "range": "± 7661.5568269838095"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 631819.3010602678,
            "unit": "ns",
            "range": "± 943.4477456511745"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 565894.8893229166,
            "unit": "ns",
            "range": "± 863.1383020090162"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2276037.5,
            "unit": "ns",
            "range": "± 80539.02919925826"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2389204.761904762,
            "unit": "ns",
            "range": "± 128130.10603849746"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2933484.745762712,
            "unit": "ns",
            "range": "± 128977.72838156488"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2966741.463414634,
            "unit": "ns",
            "range": "± 156607.57195261572"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12451941.111111112,
            "unit": "ns",
            "range": "± 1380874.4207273072"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 184581.53846153847,
            "unit": "ns",
            "range": "± 8484.524373596545"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 177421.42857142858,
            "unit": "ns",
            "range": "± 8035.976135006644"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 148931.914893617,
            "unit": "ns",
            "range": "± 5624.291506414046"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2959173.3333333335,
            "unit": "ns",
            "range": "± 50788.08165401837"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2637366.6666666665,
            "unit": "ns",
            "range": "± 47244.964458306735"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14385.567010309278,
            "unit": "ns",
            "range": "± 2258.409732289591"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 62206.382978723406,
            "unit": "ns",
            "range": "± 7256.614461520469"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 52673.40425531915,
            "unit": "ns",
            "range": "± 4953.8336524681345"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 70791.9191919192,
            "unit": "ns",
            "range": "± 14917.498810756237"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3396.7391304347825,
            "unit": "ns",
            "range": "± 609.710990255872"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12783.695652173914,
            "unit": "ns",
            "range": "± 2045.9167145946608"
          }
        ]
      }
    ]
  }
}