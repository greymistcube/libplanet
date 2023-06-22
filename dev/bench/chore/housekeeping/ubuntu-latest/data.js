window.BENCHMARK_DATA = {
  "lastUpdate": 1687440107891,
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
          "id": "76832be1dd36f1c70b3da27dec6ee5d77d0869b1",
          "message": "Housekeeping",
          "timestamp": "2023-06-22T22:07:03+09:00",
          "tree_id": "355d07e94a01d318834dec7b59c143d0d1548a98",
          "url": "https://github.com/greymistcube/libplanet/commit/76832be1dd36f1c70b3da27dec6ee5d77d0869b1"
        },
        "date": 1687440100900,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3555501.025,
            "unit": "ns",
            "range": "± 113632.36294374436"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4025519.8235294116,
            "unit": "ns",
            "range": "± 81040.57207213812"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4681179,
            "unit": "ns",
            "range": "± 102230.25402492161"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4734993.472727273,
            "unit": "ns",
            "range": "± 200042.2557702779"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7527830.476190476,
            "unit": "ns",
            "range": "± 159069.9375861508"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8782711.5,
            "unit": "ns",
            "range": "± 214353.9078298063"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23182832.2,
            "unit": "ns",
            "range": "± 309966.9853390381"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 57783831.46666667,
            "unit": "ns",
            "range": "± 612295.2005560561"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 113952911.86666666,
            "unit": "ns",
            "range": "± 1181861.271211574"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 228417945.46666667,
            "unit": "ns",
            "range": "± 1993519.2258408556"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 307900.71428571426,
            "unit": "ns",
            "range": "± 12222.375215835367"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 287342.30188679247,
            "unit": "ns",
            "range": "± 11813.296230527223"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 250618.44285714286,
            "unit": "ns",
            "range": "± 12106.803647914305"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4695403.4,
            "unit": "ns",
            "range": "± 71289.32524558938"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4225674.571428572,
            "unit": "ns",
            "range": "± 63607.81914164362"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21543.443298969072,
            "unit": "ns",
            "range": "± 2258.2841659887868"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 103994.65656565657,
            "unit": "ns",
            "range": "± 8370.683197145365"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 82857.22916666667,
            "unit": "ns",
            "range": "± 5757.8161950867725"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 108242.87234042553,
            "unit": "ns",
            "range": "± 15985.944170967547"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6269.448979591837,
            "unit": "ns",
            "range": "± 1306.9336752072388"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21269.76842105263,
            "unit": "ns",
            "range": "± 2666.4639165271105"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 51898.34444444445,
            "unit": "ns",
            "range": "± 2895.0442086283597"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6053437.776041667,
            "unit": "ns",
            "range": "± 34404.72225522587"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1900328.30703125,
            "unit": "ns",
            "range": "± 3466.914046823986"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1395629.353515625,
            "unit": "ns",
            "range": "± 3221.1843846295233"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2652822.0753348214,
            "unit": "ns",
            "range": "± 5233.386967884361"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 862575.9843098958,
            "unit": "ns",
            "range": "± 708.4039040900657"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 764172.0606166294,
            "unit": "ns",
            "range": "± 1568.6262228626413"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1583276.898989899,
            "unit": "ns",
            "range": "± 132513.7799926048"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2978784.290322581,
            "unit": "ns",
            "range": "± 134198.5730320884"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2464059.815384615,
            "unit": "ns",
            "range": "± 114448.56135439353"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5895428.085714285,
            "unit": "ns",
            "range": "± 190662.7738656382"
          }
        ]
      }
    ]
  }
}