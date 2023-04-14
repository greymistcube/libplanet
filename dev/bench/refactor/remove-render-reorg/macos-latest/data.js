window.BENCHMARK_DATA = {
  "lastUpdate": 1681461619810,
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
          "id": "a878c60896e7335a8a60941cd3bd7a42448e3358",
          "message": "Fixed tests",
          "timestamp": "2023-04-14T17:20:20+09:00",
          "tree_id": "c254f45f3ec7cfd35c874b44f4bbbf61dda135af",
          "url": "https://github.com/greymistcube/libplanet/commit/a878c60896e7335a8a60941cd3bd7a42448e3358"
        },
        "date": 1681461591452,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8207044.066666666,
            "unit": "ns",
            "range": "± 119561.72492391095"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20595461.2,
            "unit": "ns",
            "range": "± 247082.94806175053"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51139059.64285714,
            "unit": "ns",
            "range": "± 439369.8804393904"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 101385017.58333333,
            "unit": "ns",
            "range": "± 1396966.8067161834"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 207994018.92307693,
            "unit": "ns",
            "range": "± 1651450.1381989738"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 81349.40217391304,
            "unit": "ns",
            "range": "± 9950.303305399577"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 393463.06666666665,
            "unit": "ns",
            "range": "± 17570.87875045744"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 354617.34736842103,
            "unit": "ns",
            "range": "± 35437.0223677575"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 320452.63333333336,
            "unit": "ns",
            "range": "± 18450.31277540065"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5677405.133333334,
            "unit": "ns",
            "range": "± 87756.11717291658"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4296369.085106383,
            "unit": "ns",
            "range": "± 285532.1820620418"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25583.926315789475,
            "unit": "ns",
            "range": "± 4160.1350562214"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 118358.21134020618,
            "unit": "ns",
            "range": "± 19572.900772368266"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 125711.30645161291,
            "unit": "ns",
            "range": "± 12800.856928056284"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 271487.48421052634,
            "unit": "ns",
            "range": "± 24221.706609174307"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9477.32105263158,
            "unit": "ns",
            "range": "± 1224.224669782987"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 26147.67391304348,
            "unit": "ns",
            "range": "± 4353.88785488767"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1816856.297752809,
            "unit": "ns",
            "range": "± 281196.3579932818"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3313090.4431818184,
            "unit": "ns",
            "range": "± 403676.665824822"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2833155.522727273,
            "unit": "ns",
            "range": "± 337451.5713944361"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7927738.923913044,
            "unit": "ns",
            "range": "± 1269685.8928700404"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3406144.988888889,
            "unit": "ns",
            "range": "± 249384.14273158225"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3627022.1770833335,
            "unit": "ns",
            "range": "± 236130.13619155434"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4732236.101123596,
            "unit": "ns",
            "range": "± 261900.26509354514"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4580066.088235294,
            "unit": "ns",
            "range": "± 184176.66381690995"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8522244.403846154,
            "unit": "ns",
            "range": "± 348955.22005756263"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6885349.562127976,
            "unit": "ns",
            "range": "± 156211.22130848016"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2013189.8060825893,
            "unit": "ns",
            "range": "± 16532.281430402072"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1286856.977313702,
            "unit": "ns",
            "range": "± 8393.431803083467"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2832164.5725446427,
            "unit": "ns",
            "range": "± 80527.66186453226"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 847590.4813701923,
            "unit": "ns",
            "range": "± 5870.671236197065"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 735444.5950270433,
            "unit": "ns",
            "range": "± 7422.193229027972"
          }
        ]
      }
    ]
  }
}