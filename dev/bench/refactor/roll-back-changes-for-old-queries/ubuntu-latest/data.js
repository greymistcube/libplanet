window.BENCHMARK_DATA = {
  "lastUpdate": 1704204172581,
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
          "id": "f12184e29d683f480dd46778870e43c10233e50a",
          "message": "Roll back exposed GraphQL API changes by adding LegacyBencodexValueType",
          "timestamp": "2024-01-02T22:40:20+09:00",
          "tree_id": "f983da298ebf7f6783db8aa8342ab7ceefac443f",
          "url": "https://github.com/greymistcube/libplanet/commit/f12184e29d683f480dd46778870e43c10233e50a"
        },
        "date": 1704203499014,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3701977.183293269,
            "unit": "ns",
            "range": "± 6016.528981893205"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1200448.7898995536,
            "unit": "ns",
            "range": "± 3320.760920063571"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 774776.3430989584,
            "unit": "ns",
            "range": "± 14101.769166409238"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1970972.9150390625,
            "unit": "ns",
            "range": "± 4362.436855982901"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 621249.9772949219,
            "unit": "ns",
            "range": "± 1174.9010125974064"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 586662.3102463942,
            "unit": "ns",
            "range": "± 1127.8006854051723"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2429949.777777778,
            "unit": "ns",
            "range": "± 50931.18125910405"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2483511.637681159,
            "unit": "ns",
            "range": "± 93169.60012193624"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3207174.3636363638,
            "unit": "ns",
            "range": "± 75849.24678192449"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2970295.0172413792,
            "unit": "ns",
            "range": "± 129133.86646646434"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7123977.142857143,
            "unit": "ns",
            "range": "± 190868.47463879883"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 40991.427083333336,
            "unit": "ns",
            "range": "± 6530.298343704143"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 197624.425,
            "unit": "ns",
            "range": "± 6726.684971973898"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 195234.98214285713,
            "unit": "ns",
            "range": "± 6128.486249374003"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 169958.16666666666,
            "unit": "ns",
            "range": "± 5580.931563304259"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3060735.3571428573,
            "unit": "ns",
            "range": "± 39643.99432372526"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2776798.4285714286,
            "unit": "ns",
            "range": "± 22460.385570066333"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13956.810526315789,
            "unit": "ns",
            "range": "± 2170.8449002033935"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 67691.02105263158,
            "unit": "ns",
            "range": "± 8234.741940664522"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 57853.9793814433,
            "unit": "ns",
            "range": "± 6057.767575565314"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 60687.35051546392,
            "unit": "ns",
            "range": "± 11813.190604187299"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3568.4137931034484,
            "unit": "ns",
            "range": "± 457.8305909832765"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12972.708333333334,
            "unit": "ns",
            "range": "± 1971.9290577431864"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5653353,
            "unit": "ns",
            "range": "± 59846.30708859868"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14644071.357142856,
            "unit": "ns",
            "range": "± 195198.89684414287"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36592220,
            "unit": "ns",
            "range": "± 191765.10869691195"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 76760219.42857143,
            "unit": "ns",
            "range": "± 754214.1586531502"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 151043621,
            "unit": "ns",
            "range": "± 957348.8071876897"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 955120,
            "unit": "ns",
            "range": "± 70700.95461920346"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1875611.5454545454,
            "unit": "ns",
            "range": "± 83468.00478565365"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1396695.5263157894,
            "unit": "ns",
            "range": "± 87495.42580795748"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6114255.6875,
            "unit": "ns",
            "range": "± 371108.2543271625"
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
          "id": "14195aed74f84db63008589a07b131e635f84ea9",
          "message": "Changelog",
          "timestamp": "2024-01-02T22:50:05+09:00",
          "tree_id": "b5c7655d8f7b38eb6c79a3965935caaa3fe4a711",
          "url": "https://github.com/greymistcube/libplanet/commit/14195aed74f84db63008589a07b131e635f84ea9"
        },
        "date": 1704204060976,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3750962.0540865385,
            "unit": "ns",
            "range": "± 7395.702283411742"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1201878.3607700893,
            "unit": "ns",
            "range": "± 1921.9985910858245"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 776589.7876352164,
            "unit": "ns",
            "range": "± 8856.076600418295"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1951953.7055288462,
            "unit": "ns",
            "range": "± 4451.089767550021"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 621466.5013950893,
            "unit": "ns",
            "range": "± 667.7860018050784"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 587195.9131610577,
            "unit": "ns",
            "range": "± 1437.1104590162872"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2380544.576923077,
            "unit": "ns",
            "range": "± 65149.12819933853"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2494145.5,
            "unit": "ns",
            "range": "± 37373.87482432903"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3117125.68627451,
            "unit": "ns",
            "range": "± 127265.42803110203"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2907742.0689655175,
            "unit": "ns",
            "range": "± 126726.21227713388"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7085292.25,
            "unit": "ns",
            "range": "± 156019.74624213605"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 37069.566666666666,
            "unit": "ns",
            "range": "± 3191.053846742325"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 194881.06666666668,
            "unit": "ns",
            "range": "± 8633.72019873568"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 191525.078125,
            "unit": "ns",
            "range": "± 7404.514135383982"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 162341.02631578947,
            "unit": "ns",
            "range": "± 5030.2143027629745"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3057127.25,
            "unit": "ns",
            "range": "± 19059.902475783125"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2781394.5625,
            "unit": "ns",
            "range": "± 52309.03334985109"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12297.435294117648,
            "unit": "ns",
            "range": "± 1538.6775509775766"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 62615.166666666664,
            "unit": "ns",
            "range": "± 5997.750921745436"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 57658.0625,
            "unit": "ns",
            "range": "± 6592.466397036289"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 62830.65306122449,
            "unit": "ns",
            "range": "± 14072.329839635864"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3096.9555555555557,
            "unit": "ns",
            "range": "± 614.2978299206286"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12440.229166666666,
            "unit": "ns",
            "range": "± 1957.2471133506108"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5590150,
            "unit": "ns",
            "range": "± 16197.05606204174"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14405939.933333334,
            "unit": "ns",
            "range": "± 105942.85591465044"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36301510.192307696,
            "unit": "ns",
            "range": "± 154066.13346838244"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 73029237.42857143,
            "unit": "ns",
            "range": "± 500281.01429519115"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 147499958.07692307,
            "unit": "ns",
            "range": "± 561933.3440031628"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 972855.5957446808,
            "unit": "ns",
            "range": "± 95844.89949715513"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1851289.0810810812,
            "unit": "ns",
            "range": "± 61600.205470607165"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1411944.8775510204,
            "unit": "ns",
            "range": "± 121529.74831942504"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5976802.666666667,
            "unit": "ns",
            "range": "± 286860.6432381752"
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
          "id": "24a7e67501c7a128e5d2e6edcf960115525bbbcb",
          "message": "Changelog",
          "timestamp": "2024-01-02T22:51:38+09:00",
          "tree_id": "3c8dd8c8e28d5b04d48efc66c1ae418f28de7ad8",
          "url": "https://github.com/greymistcube/libplanet/commit/24a7e67501c7a128e5d2e6edcf960115525bbbcb"
        },
        "date": 1704204165790,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3864443.840625,
            "unit": "ns",
            "range": "± 57318.46122252829"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1210015.0659555288,
            "unit": "ns",
            "range": "± 18436.877538353798"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 772926.0837890625,
            "unit": "ns",
            "range": "± 1741.4862962996278"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1952486.7791466345,
            "unit": "ns",
            "range": "± 2595.432539076398"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 661091.5275691106,
            "unit": "ns",
            "range": "± 1055.941492150411"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 568733.4488932291,
            "unit": "ns",
            "range": "± 937.5253256920394"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2404695.1666666665,
            "unit": "ns",
            "range": "± 43727.32592822632"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2567591.382352941,
            "unit": "ns",
            "range": "± 82470.26302406503"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3214729.8,
            "unit": "ns",
            "range": "± 129646.0515509242"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2952259.9032258065,
            "unit": "ns",
            "range": "± 133948.55583987772"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7000036.30952381,
            "unit": "ns",
            "range": "± 255514.42771688497"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 41066.09375,
            "unit": "ns",
            "range": "± 6408.242791540357"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 201954.02127659574,
            "unit": "ns",
            "range": "± 15347.12883639959"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 193129.64285714287,
            "unit": "ns",
            "range": "± 8397.263751456228"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 171454.39130434784,
            "unit": "ns",
            "range": "± 4267.779247285092"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3148875.9285714286,
            "unit": "ns",
            "range": "± 38023.37968522542"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2868286.625,
            "unit": "ns",
            "range": "± 52811.40613652194"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14434.030927835052,
            "unit": "ns",
            "range": "± 3204.6442582524155"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 67525.5,
            "unit": "ns",
            "range": "± 7829.991547419005"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 96722.75,
            "unit": "ns",
            "range": "± 1866.7172433624398"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 75593.01041666667,
            "unit": "ns",
            "range": "± 19656.734169232957"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6117.071428571428,
            "unit": "ns",
            "range": "± 2105.951215156362"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15353.130434782608,
            "unit": "ns",
            "range": "± 3033.824454045528"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5770218.066666666,
            "unit": "ns",
            "range": "± 80980.69149888815"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 15303757.214285715,
            "unit": "ns",
            "range": "± 83598.19721871866"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37723136.65384615,
            "unit": "ns",
            "range": "± 212040.83830748504"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 74089711.36666666,
            "unit": "ns",
            "range": "± 747851.8488059045"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 151578908.7857143,
            "unit": "ns",
            "range": "± 1094377.7721878998"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 967662.9090909091,
            "unit": "ns",
            "range": "± 80054.88930104054"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1835471.3541666667,
            "unit": "ns",
            "range": "± 71271.32787826723"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1402687.0752688171,
            "unit": "ns",
            "range": "± 120064.00897965224"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6024427.957894737,
            "unit": "ns",
            "range": "± 348479.741474152"
          }
        ]
      }
    ]
  }
}