window.BENCHMARK_DATA = {
  "lastUpdate": 1690939677121,
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
          "id": "85126addabf82295fa629727043a6fd2869ca007",
          "message": "Fix csproj",
          "timestamp": "2023-08-02T10:14:40+09:00",
          "tree_id": "e5b156d072a466456a1865a22fa6abd8553e0b40",
          "url": "https://github.com/greymistcube/libplanet/commit/85126addabf82295fa629727043a6fd2869ca007"
        },
        "date": 1690939669292,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 284881.9375,
            "unit": "ns",
            "range": "± 5532.209871516084"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 275600.7272727273,
            "unit": "ns",
            "range": "± 8588.885635200033"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 242267.98076923078,
            "unit": "ns",
            "range": "± 9280.603981127784"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4315590.214285715,
            "unit": "ns",
            "range": "± 34224.025704351145"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3943617.5,
            "unit": "ns",
            "range": "± 23086.24002017719"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19838.36170212766,
            "unit": "ns",
            "range": "± 2306.1420413922124"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 89138.61627906977,
            "unit": "ns",
            "range": "± 4825.214626542789"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 73297,
            "unit": "ns",
            "range": "± 2229.1323274613674"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 81936.53424657535,
            "unit": "ns",
            "range": "± 3304.929777713354"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4853.212765957447,
            "unit": "ns",
            "range": "± 555.037843761415"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18303.21052631579,
            "unit": "ns",
            "range": "± 1403.677638439102"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1368841.855670103,
            "unit": "ns",
            "range": "± 109870.0660076284"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2553211.227272727,
            "unit": "ns",
            "range": "± 61190.76712717822"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1762675.475609756,
            "unit": "ns",
            "range": "± 92651.22861986776"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4737349.318181818,
            "unit": "ns",
            "range": "± 110159.74469676227"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6377219.61328125,
            "unit": "ns",
            "range": "± 21091.946098071614"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2006921.8741629464,
            "unit": "ns",
            "range": "± 2362.5486313829915"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1368115.3081430288,
            "unit": "ns",
            "range": "± 563.3260088765071"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2601308.8916666666,
            "unit": "ns",
            "range": "± 1710.3801155411493"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 813758.767717634,
            "unit": "ns",
            "range": "± 2983.527570094142"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 798823.9157552083,
            "unit": "ns",
            "range": "± 2992.0569959206628"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3284224.0434782607,
            "unit": "ns",
            "range": "± 125360.41868716094"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3409256.4210526315,
            "unit": "ns",
            "range": "± 40743.68463307574"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4333455,
            "unit": "ns",
            "range": "± 71644.66706800803"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3860390.6,
            "unit": "ns",
            "range": "± 55262.66096922949"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6319946.166666667,
            "unit": "ns",
            "range": "± 163859.48399551172"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7707420.733333333,
            "unit": "ns",
            "range": "± 80427.37060893305"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19875720.333333332,
            "unit": "ns",
            "range": "± 135419.9527932417"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50368649.06666667,
            "unit": "ns",
            "range": "± 130550.76474113522"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 100534584.06666666,
            "unit": "ns",
            "range": "± 790047.2210621759"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 199995003.07142857,
            "unit": "ns",
            "range": "± 548917.4753417948"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47939.85542168675,
            "unit": "ns",
            "range": "± 2555.6617353772517"
          }
        ]
      }
    ]
  }
}