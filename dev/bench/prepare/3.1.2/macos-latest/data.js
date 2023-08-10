window.BENCHMARK_DATA = {
  "lastUpdate": 1691647998013,
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
          "id": "4715616cde03d41357827312c6b961bd463bd398",
          "message": "Prepare 3.1.2",
          "timestamp": "2023-08-10T14:57:52+09:00",
          "tree_id": "d30ecd7404f1df3761d2e07603c5ace4f72df8b9",
          "url": "https://github.com/greymistcube/libplanet/commit/4715616cde03d41357827312c6b961bd463bd398"
        },
        "date": 1691647968364,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7851501.307692308,
            "unit": "ns",
            "range": "± 103362.80322597084"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18611919.46153846,
            "unit": "ns",
            "range": "± 146333.5280336302"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46783519.23076923,
            "unit": "ns",
            "range": "± 495417.4572286073"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 97443321.65384616,
            "unit": "ns",
            "range": "± 1098947.4961042532"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 189556262.14285713,
            "unit": "ns",
            "range": "± 1909099.6490280582"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 56012.22826086957,
            "unit": "ns",
            "range": "± 5420.547048957492"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 305507.9864864865,
            "unit": "ns",
            "range": "± 15080.926151107478"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 297599.5806451613,
            "unit": "ns",
            "range": "± 17194.485253002145"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 291019.1081081081,
            "unit": "ns",
            "range": "± 9885.429282489411"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3957618.966666667,
            "unit": "ns",
            "range": "± 114585.47158930611"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3609360.0625,
            "unit": "ns",
            "range": "± 69831.88184009626"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18544.459770114943,
            "unit": "ns",
            "range": "± 1879.632576692247"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 85827.27777777778,
            "unit": "ns",
            "range": "± 6295.165805400058"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 79823.86021505376,
            "unit": "ns",
            "range": "± 7228.185877388177"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 101375.95789473684,
            "unit": "ns",
            "range": "± 14181.656115901897"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5079.5161290322585,
            "unit": "ns",
            "range": "± 588.2614882357798"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17523.752808988764,
            "unit": "ns",
            "range": "± 1539.5632075431095"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1437655.9894736842,
            "unit": "ns",
            "range": "± 114705.89854961407"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2817377.5833333335,
            "unit": "ns",
            "range": "± 131876.33300400988"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2011312.0425531915,
            "unit": "ns",
            "range": "± 202368.8923087149"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5600810.568181818,
            "unit": "ns",
            "range": "± 197613.9873231129"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3100620.410714286,
            "unit": "ns",
            "range": "± 132466.71689828378"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3281903.2191780824,
            "unit": "ns",
            "range": "± 162885.45467207645"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4212812.326923077,
            "unit": "ns",
            "range": "± 173584.32598231375"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3676601.425373134,
            "unit": "ns",
            "range": "± 173194.87986521036"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6939987.175,
            "unit": "ns",
            "range": "± 230047.21546661446"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6330188.864583333,
            "unit": "ns",
            "range": "± 49405.168278986785"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1856416.3307291667,
            "unit": "ns",
            "range": "± 7347.316747131078"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1222277.6334635417,
            "unit": "ns",
            "range": "± 3391.3031486702994"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2378786.9244791665,
            "unit": "ns",
            "range": "± 17869.150751584606"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 815725.4151041667,
            "unit": "ns",
            "range": "± 5061.163920721909"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 697842.9646484375,
            "unit": "ns",
            "range": "± 5607.936276337396"
          }
        ]
      }
    ]
  }
}