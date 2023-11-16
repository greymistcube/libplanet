window.BENCHMARK_DATA = {
  "lastUpdate": 1700146962543,
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
          "id": "230112d213d64abb0a6d51bbb0b61790bd7cd397",
          "message": "Remove unnecessary extensions",
          "timestamp": "2023-11-16T22:21:59+09:00",
          "tree_id": "4940d84801c8aca15903cc63aa02253da0eac664",
          "url": "https://github.com/greymistcube/libplanet/commit/230112d213d64abb0a6d51bbb0b61790bd7cd397"
        },
        "date": 1700146955313,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5863582.730769231,
            "unit": "ns",
            "range": "± 27224.866865771342"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14835197.538461538,
            "unit": "ns",
            "range": "± 108999.0669521345"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37847347.92307692,
            "unit": "ns",
            "range": "± 191593.7384965305"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 76671084.71428572,
            "unit": "ns",
            "range": "± 714406.4303863817"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 152841264.6153846,
            "unit": "ns",
            "range": "± 608801.9056757486"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 943331.9777777778,
            "unit": "ns",
            "range": "± 55472.872415460624"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1868152.4444444445,
            "unit": "ns",
            "range": "± 51889.98037190634"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1420411.17,
            "unit": "ns",
            "range": "± 144742.51822739988"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10729591.587628866,
            "unit": "ns",
            "range": "± 963387.6563721286"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2448753.4166666665,
            "unit": "ns",
            "range": "± 95127.37666733972"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2622568.121212121,
            "unit": "ns",
            "range": "± 81072.77651698102"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3292578.214285714,
            "unit": "ns",
            "range": "± 38983.3578282571"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3001483.9545454546,
            "unit": "ns",
            "range": "± 112331.30380345424"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 11746676.125,
            "unit": "ns",
            "range": "± 973724.3412250367"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 41944.1947368421,
            "unit": "ns",
            "range": "± 4748.362468180722"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3660864.470377604,
            "unit": "ns",
            "range": "± 11326.169670850346"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1157516.822265625,
            "unit": "ns",
            "range": "± 5584.131814726611"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 733346.3897235577,
            "unit": "ns",
            "range": "± 1669.8497483594854"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1956014.5829427084,
            "unit": "ns",
            "range": "± 29961.884090989748"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 618885.2607421875,
            "unit": "ns",
            "range": "± 9544.510688913111"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 571209.9719050481,
            "unit": "ns",
            "range": "± 1764.3557320934947"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 205820.37931034484,
            "unit": "ns",
            "range": "± 11271.184628771105"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 199689.69444444444,
            "unit": "ns",
            "range": "± 9386.136392797307"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 167136.03846153847,
            "unit": "ns",
            "range": "± 4385.010882365235"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3097781.5384615385,
            "unit": "ns",
            "range": "± 36267.72117327699"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3108130.0714285714,
            "unit": "ns",
            "range": "± 32603.93473768344"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14337.247311827958,
            "unit": "ns",
            "range": "± 1882.9847874879852"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 72097.13265306123,
            "unit": "ns",
            "range": "± 13526.89540781529"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 60691.17894736842,
            "unit": "ns",
            "range": "± 7377.995403208438"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 75137.3947368421,
            "unit": "ns",
            "range": "± 18023.06389252139"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3541.4942528735633,
            "unit": "ns",
            "range": "± 795.7519023432275"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13979.947368421053,
            "unit": "ns",
            "range": "± 1846.9548795213384"
          }
        ]
      }
    ]
  }
}