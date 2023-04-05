window.BENCHMARK_DATA = {
  "lastUpdate": 1680662447545,
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
          "id": "fb76686b4182016bc58f8f9c7ddcaad65f667177",
          "message": "Merge tag '0.53.3' into port/0.53.4-to-main",
          "timestamp": "2023-04-05T11:13:46+09:00",
          "tree_id": "59bc08dfe2b68ab052100fa319209ce2d4dc57b2",
          "url": "https://github.com/greymistcube/libplanet/commit/fb76686b4182016bc58f8f9c7ddcaad65f667177"
        },
        "date": 1680662051131,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8112394.933333334,
            "unit": "ns",
            "range": "± 115086.43666980216"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20280215.333333332,
            "unit": "ns",
            "range": "± 320131.139007275"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52175744.733333334,
            "unit": "ns",
            "range": "± 744550.773752245"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 105054415.5,
            "unit": "ns",
            "range": "± 360815.60097209923"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 213452471.66666666,
            "unit": "ns",
            "range": "± 3751946.555884014"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 71395.44210526315,
            "unit": "ns",
            "range": "± 8608.980607501446"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 441282.1129032258,
            "unit": "ns",
            "range": "± 54642.15016697519"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 337145.3,
            "unit": "ns",
            "range": "± 15027.610821756383"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 320307.2346938776,
            "unit": "ns",
            "range": "± 12801.19977576241"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5644374.785714285,
            "unit": "ns",
            "range": "± 72766.79405965182"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4236602,
            "unit": "ns",
            "range": "± 74860.98491100791"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19220.364583333332,
            "unit": "ns",
            "range": "± 3106.245051233306"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 105571.38775510204,
            "unit": "ns",
            "range": "± 10528.716514168518"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 117780.76785714286,
            "unit": "ns",
            "range": "± 5059.419034169012"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 250197.1157894737,
            "unit": "ns",
            "range": "± 16258.897481571048"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9140.202127659575,
            "unit": "ns",
            "range": "± 915.0564772485708"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22358.882978723403,
            "unit": "ns",
            "range": "± 2507.5256797380703"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1667760.306122449,
            "unit": "ns",
            "range": "± 186008.33335520368"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3091344.404255319,
            "unit": "ns",
            "range": "± 186035.94296195405"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2718589.147368421,
            "unit": "ns",
            "range": "± 353850.4012776901"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7043949.1736842105,
            "unit": "ns",
            "range": "± 406731.7137122021"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3291588.05,
            "unit": "ns",
            "range": "± 80474.7932056033"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3506687.5,
            "unit": "ns",
            "range": "± 68701.17378909912"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4559228.59375,
            "unit": "ns",
            "range": "± 139151.3635408624"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4924392.612903226,
            "unit": "ns",
            "range": "± 149109.89084311327"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9631796.306122448,
            "unit": "ns",
            "range": "± 817367.1294091474"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6747958.353298611,
            "unit": "ns",
            "range": "± 144262.96775037443"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1808377.4800502232,
            "unit": "ns",
            "range": "± 12271.050127721066"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1288790.6809430805,
            "unit": "ns",
            "range": "± 6478.72578948266"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2845166.8787434897,
            "unit": "ns",
            "range": "± 140565.904645043"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 864307.3837280273,
            "unit": "ns",
            "range": "± 16570.00997215328"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 774055.1564002404,
            "unit": "ns",
            "range": "± 6110.127121334627"
          }
        ]
      },
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
          "id": "bfdd3c8b55c312741f9b8f7e1ce2beff203cdaba",
          "message": "Changelog mistake fix",
          "timestamp": "2023-04-05T11:18:46+09:00",
          "tree_id": "a4b00b995832db5c85d18c48c8c43b22da786aeb",
          "url": "https://github.com/greymistcube/libplanet/commit/bfdd3c8b55c312741f9b8f7e1ce2beff203cdaba"
        },
        "date": 1680662197695,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8664058.9,
            "unit": "ns",
            "range": "± 137671.92520356915"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21471520.966666665,
            "unit": "ns",
            "range": "± 398448.9621657722"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52094166.2,
            "unit": "ns",
            "range": "± 516884.6643488551"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 110505732.26666667,
            "unit": "ns",
            "range": "± 1115862.5282521823"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 205628601.2142857,
            "unit": "ns",
            "range": "± 1571720.815699807"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 66564.3469387755,
            "unit": "ns",
            "range": "± 9828.691838947365"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 375082.8791208791,
            "unit": "ns",
            "range": "± 26231.33981279101"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 305452.94444444444,
            "unit": "ns",
            "range": "± 17656.893371604325"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 290659.14444444445,
            "unit": "ns",
            "range": "± 29290.625177196824"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5739603.4186046515,
            "unit": "ns",
            "range": "± 311825.9161124988"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4247846.085106383,
            "unit": "ns",
            "range": "± 376680.49244255654"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19848.214285714286,
            "unit": "ns",
            "range": "± 3208.727210972131"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 102041.1875,
            "unit": "ns",
            "range": "± 16210.04061965267"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 115317.17708333333,
            "unit": "ns",
            "range": "± 21610.171101392723"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 248748.65555555557,
            "unit": "ns",
            "range": "± 24089.999189911"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9147.61052631579,
            "unit": "ns",
            "range": "± 1072.999090784418"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21881.393617021276,
            "unit": "ns",
            "range": "± 3982.197178729526"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1635125.2216494845,
            "unit": "ns",
            "range": "± 165652.48275907195"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3110936.367647059,
            "unit": "ns",
            "range": "± 138738.91072371555"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2643800.6052631577,
            "unit": "ns",
            "range": "± 230687.01679864188"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7545269.387096774,
            "unit": "ns",
            "range": "± 709938.891380801"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4020077.717391304,
            "unit": "ns",
            "range": "± 1043752.1074568479"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4463481.583333333,
            "unit": "ns",
            "range": "± 1342893.1442956224"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4404405.74137931,
            "unit": "ns",
            "range": "± 193118.2962485448"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4557327.779569892,
            "unit": "ns",
            "range": "± 258570.64990566575"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8921143.966666667,
            "unit": "ns",
            "range": "± 266574.03497362515"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6348965.402613146,
            "unit": "ns",
            "range": "± 181725.08060536144"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2022762.3878173828,
            "unit": "ns",
            "range": "± 61148.079403548225"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1263698.986436632,
            "unit": "ns",
            "range": "± 26550.842754872046"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2571425.069754464,
            "unit": "ns",
            "range": "± 29713.27611254463"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 788600.270703125,
            "unit": "ns",
            "range": "± 5865.365862781867"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 724956.6506911058,
            "unit": "ns",
            "range": "± 1757.7929883998033"
          }
        ]
      },
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
          "id": "f49dfaa339aaffdb66c83f210d97837dce3c2835",
          "message": "Changelog mistake fix",
          "timestamp": "2023-04-05T11:17:13+09:00",
          "tree_id": "219fa0924074c1e940bb2bcfe5a9724834bf7855",
          "url": "https://github.com/greymistcube/libplanet/commit/f49dfaa339aaffdb66c83f210d97837dce3c2835"
        },
        "date": 1680662199535,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 14494485.712765958,
            "unit": "ns",
            "range": "± 4453135.826228315"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27254502.082474228,
            "unit": "ns",
            "range": "± 6595266.199567408"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 61654576.7628866,
            "unit": "ns",
            "range": "± 7157606.282443523"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 125813152.75757575,
            "unit": "ns",
            "range": "± 13536510.689681606"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 268984934.62,
            "unit": "ns",
            "range": "± 23441325.537294727"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 71593.1888888889,
            "unit": "ns",
            "range": "± 10146.871228233218"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 485670.33838383836,
            "unit": "ns",
            "range": "± 82497.0557344392"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 407002.58585858584,
            "unit": "ns",
            "range": "± 77663.42904153797"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 314080.0722891566,
            "unit": "ns",
            "range": "± 21541.847959989318"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5497155.923076923,
            "unit": "ns",
            "range": "± 61530.85671089687"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3886099.7359550563,
            "unit": "ns",
            "range": "± 275639.12422091543"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16678.744444444445,
            "unit": "ns",
            "range": "± 1399.2371000110884"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 82858.79787234042,
            "unit": "ns",
            "range": "± 7981.880157655727"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 95434.93298969071,
            "unit": "ns",
            "range": "± 11027.98115015015"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 225606.1182795699,
            "unit": "ns",
            "range": "± 15396.695643411864"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7438.0526315789475,
            "unit": "ns",
            "range": "± 1534.0101969786544"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20425.882978723403,
            "unit": "ns",
            "range": "± 3235.8496486277545"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1532281.3111111112,
            "unit": "ns",
            "range": "± 182746.1113237353"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2848505.3333333335,
            "unit": "ns",
            "range": "± 182152.22271279996"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2591558.85106383,
            "unit": "ns",
            "range": "± 349750.45488274534"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7021671.3877551025,
            "unit": "ns",
            "range": "± 617617.6202883271"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4100167.81,
            "unit": "ns",
            "range": "± 783823.9094317696"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5051268.912371134,
            "unit": "ns",
            "range": "± 981317.8870637196"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5844962.873737373,
            "unit": "ns",
            "range": "± 1034654.0734228626"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6101908.142105263,
            "unit": "ns",
            "range": "± 901160.3056069755"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 11350307.005263157,
            "unit": "ns",
            "range": "± 1489993.5853134722"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6992147.725260417,
            "unit": "ns",
            "range": "± 232566.5769030593"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2066217.2894071692,
            "unit": "ns",
            "range": "± 41025.64094336266"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1371277.612883391,
            "unit": "ns",
            "range": "± 55120.70319939699"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2874437.7218098957,
            "unit": "ns",
            "range": "± 117937.40269507817"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 878050.201032366,
            "unit": "ns",
            "range": "± 14351.8646326855"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 715204.1248851103,
            "unit": "ns",
            "range": "± 13777.012293412095"
          }
        ]
      },
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
          "id": "09ca699d803f15f61f917e0bfd5cf199d4fd0039",
          "message": "Changelog mistake fix",
          "timestamp": "2023-04-05T11:19:56+09:00",
          "tree_id": "a20713c79a422ffa1deb62d6590816c2570af5a4",
          "url": "https://github.com/greymistcube/libplanet/commit/09ca699d803f15f61f917e0bfd5cf199d4fd0039"
        },
        "date": 1680662429095,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8952760.612244898,
            "unit": "ns",
            "range": "± 720626.3246350235"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20650122.98809524,
            "unit": "ns",
            "range": "± 1108692.4133576376"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53065968.277777776,
            "unit": "ns",
            "range": "± 2148483.5651334687"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 112781665.48387097,
            "unit": "ns",
            "range": "± 6384791.230779387"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 226884023.62,
            "unit": "ns",
            "range": "± 5920487.621587321"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 71580.86666666667,
            "unit": "ns",
            "range": "± 7229.525627358217"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 416064.4680851064,
            "unit": "ns",
            "range": "± 40845.27114327664"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 359584.9111111111,
            "unit": "ns",
            "range": "± 55019.83634050387"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 315791.73195876286,
            "unit": "ns",
            "range": "± 36945.11469072385"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6161210.840659341,
            "unit": "ns",
            "range": "± 474809.6823307026"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4910597.145833333,
            "unit": "ns",
            "range": "± 493858.08792761044"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23442.07608695652,
            "unit": "ns",
            "range": "± 4921.400716881849"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 102675.41935483871,
            "unit": "ns",
            "range": "± 19475.83961315782"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 118223.41758241758,
            "unit": "ns",
            "range": "± 15913.215572854277"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 262201.18947368424,
            "unit": "ns",
            "range": "± 36702.28611445815"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7096.134831460674,
            "unit": "ns",
            "range": "± 1173.346033117287"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22375.65263157895,
            "unit": "ns",
            "range": "± 6143.548236259158"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1574782.0263157894,
            "unit": "ns",
            "range": "± 135203.70170675582"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3029903.9101123596,
            "unit": "ns",
            "range": "± 166035.99768441785"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2656761.742424242,
            "unit": "ns",
            "range": "± 250451.05010328582"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6811262.361702127,
            "unit": "ns",
            "range": "± 240907.81164743836"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3891820.647368421,
            "unit": "ns",
            "range": "± 526389.6776328385"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3909887.6666666665,
            "unit": "ns",
            "range": "± 411464.25712389563"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4812311.891304348,
            "unit": "ns",
            "range": "± 344070.52288428776"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4792141.583333333,
            "unit": "ns",
            "range": "± 336130.05798265734"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9349008.651898734,
            "unit": "ns",
            "range": "± 484072.1545925505"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7459600.502837171,
            "unit": "ns",
            "range": "± 492327.6563297984"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1978984.1008731618,
            "unit": "ns",
            "range": "± 28959.257831632138"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1297632.8951322115,
            "unit": "ns",
            "range": "± 9531.143072724926"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2537709.0002441406,
            "unit": "ns",
            "range": "± 48658.952308966596"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 864991.2209635417,
            "unit": "ns",
            "range": "± 32690.93099416981"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 878887.2880995008,
            "unit": "ns",
            "range": "± 42910.425480956284"
          }
        ]
      }
    ]
  }
}