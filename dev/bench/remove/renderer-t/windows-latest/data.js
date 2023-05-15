window.BENCHMARK_DATA = {
  "lastUpdate": 1684143085120,
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
          "id": "2b3cbf39451018cb40616ce35eaec98920f1d09f",
          "message": "Removed t from ValidatingActionRenderer",
          "timestamp": "2023-05-15T18:16:40+09:00",
          "tree_id": "97f78ae1c1cd89e5920809d894e84fe961e1e86c",
          "url": "https://github.com/greymistcube/libplanet/commit/2b3cbf39451018cb40616ce35eaec98920f1d09f"
        },
        "date": 1684143059473,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1218475.2577319588,
            "unit": "ns",
            "range": "± 126218.59677999103"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2302934.722222222,
            "unit": "ns",
            "range": "± 112331.05017636294"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2033946.3917525774,
            "unit": "ns",
            "range": "± 169561.29487952116"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5212817.24137931,
            "unit": "ns",
            "range": "± 379640.6174531494"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49525,
            "unit": "ns",
            "range": "± 850.4900548115382"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6122869.230769231,
            "unit": "ns",
            "range": "± 57502.81709932979"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17277346.666666668,
            "unit": "ns",
            "range": "± 297697.08205937565"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 43765985,
            "unit": "ns",
            "range": "± 942483.5987823259"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 89806318.42105263,
            "unit": "ns",
            "range": "± 3049953.064136443"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 178378741.66666666,
            "unit": "ns",
            "range": "± 5372648.640787628"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4377800.558035715,
            "unit": "ns",
            "range": "± 56363.9214217396"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1383795.2213541667,
            "unit": "ns",
            "range": "± 19741.284550439956"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1073762.560614224,
            "unit": "ns",
            "range": "± 31425.671692038606"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2430715.8088235296,
            "unit": "ns",
            "range": "± 46848.98417848746"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 749172.5471047794,
            "unit": "ns",
            "range": "± 14572.221910472517"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 688707.2265625,
            "unit": "ns",
            "range": "± 6305.004335269927"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2913057.777777778,
            "unit": "ns",
            "range": "± 108780.65396368821"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3162334.6153846155,
            "unit": "ns",
            "range": "± 130436.71726033697"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3694046.8085106383,
            "unit": "ns",
            "range": "± 213239.39180065048"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3681960.465116279,
            "unit": "ns",
            "range": "± 197824.05449351124"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6097430.555555556,
            "unit": "ns",
            "range": "± 300584.65407348354"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 241165.06024096385,
            "unit": "ns",
            "range": "± 12844.648062044756"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 233935.29411764705,
            "unit": "ns",
            "range": "± 10125.507390358454"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 227118.55670103093,
            "unit": "ns",
            "range": "± 15526.699651305671"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3697835.714285714,
            "unit": "ns",
            "range": "± 61581.41399359509"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3324534.210526316,
            "unit": "ns",
            "range": "± 71230.26247598462"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21064.516129032258,
            "unit": "ns",
            "range": "± 2932.488376539858"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 86198.96907216495,
            "unit": "ns",
            "range": "± 7759.127620172054"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 72847.36842105263,
            "unit": "ns",
            "range": "± 6070.645135636075"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 108202.04081632652,
            "unit": "ns",
            "range": "± 17712.148429191144"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7035.416666666667,
            "unit": "ns",
            "range": "± 1452.11128808451"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20034.40860215054,
            "unit": "ns",
            "range": "± 2521.321885166757"
          }
        ]
      }
    ]
  }
}