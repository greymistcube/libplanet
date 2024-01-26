window.BENCHMARK_DATA = {
  "lastUpdate": 1706247661087,
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
          "id": "43f1a0ff33d50a9e90602666c3b215515c5a3cd0",
          "message": "Release 3.9.6",
          "timestamp": "2024-01-26T14:25:55+09:00",
          "tree_id": "27eaabd17f16bc3ddddb2605fb0cb3539cc6672e",
          "url": "https://github.com/greymistcube/libplanet/commit/43f1a0ff33d50a9e90602666c3b215515c5a3cd0"
        },
        "date": 1706247525568,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7816206.516129033,
            "unit": "ns",
            "range": "± 234519.13413861295"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18685901.5,
            "unit": "ns",
            "range": "± 125973.57147235288"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46632943.4,
            "unit": "ns",
            "range": "± 740121.2462340015"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 93997182,
            "unit": "ns",
            "range": "± 1434427.090806092"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 191238496.22,
            "unit": "ns",
            "range": "± 4944039.656231266"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34754.62222222222,
            "unit": "ns",
            "range": "± 3789.1813910272717"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 215623.73863636365,
            "unit": "ns",
            "range": "± 11577.864647872986"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 205609.7142857143,
            "unit": "ns",
            "range": "± 10238.18169616114"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 186181.0760869565,
            "unit": "ns",
            "range": "± 12310.033308204012"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3697197.3666666667,
            "unit": "ns",
            "range": "± 66699.45733005487"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3382217.523809524,
            "unit": "ns",
            "range": "± 75103.64788252235"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11796.936781609196,
            "unit": "ns",
            "range": "± 734.3166844420645"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 57569.813953488374,
            "unit": "ns",
            "range": "± 4625.16412493941"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 51389.15730337079,
            "unit": "ns",
            "range": "± 4199.918903164236"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 58814.221052631576,
            "unit": "ns",
            "range": "± 10065.520336381289"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3124.9444444444443,
            "unit": "ns",
            "range": "± 460.8106465079568"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12099.456043956045,
            "unit": "ns",
            "range": "± 1251.3541723721005"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1071002.6979166667,
            "unit": "ns",
            "range": "± 94065.34000365132"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2221362.6440677964,
            "unit": "ns",
            "range": "± 97573.77531629374"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1581278.7777777778,
            "unit": "ns",
            "range": "± 124837.04301163531"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7357235.32967033,
            "unit": "ns",
            "range": "± 734323.0782643299"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2900467.033333333,
            "unit": "ns",
            "range": "± 108257.15798853461"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2957120.6428571427,
            "unit": "ns",
            "range": "± 73765.54114028838"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3604816.6666666665,
            "unit": "ns",
            "range": "± 121516.72648962525"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3366087.0384615385,
            "unit": "ns",
            "range": "± 137036.27961300962"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12926194.453608247,
            "unit": "ns",
            "range": "± 1763088.7402339184"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4235550.2109375,
            "unit": "ns",
            "range": "± 62022.38042389489"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1313680.886783854,
            "unit": "ns",
            "range": "± 14447.30240605852"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 856372.4267578125,
            "unit": "ns",
            "range": "± 8396.508988237305"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1953892.431919643,
            "unit": "ns",
            "range": "± 17039.503994048624"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 616751.6132114956,
            "unit": "ns",
            "range": "± 7974.078734946027"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 563065.9717447917,
            "unit": "ns",
            "range": "± 8988.70139322326"
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
          "id": "0cf9befcdce0a60ce9387fa85607921c485c17d2",
          "message": "Release 3.9.6",
          "timestamp": "2024-01-26T14:29:10+09:00",
          "tree_id": "fe7b38878dadae1236572a61986f6953de322925",
          "url": "https://github.com/greymistcube/libplanet/commit/0cf9befcdce0a60ce9387fa85607921c485c17d2"
        },
        "date": 1706247648366,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7734014.214285715,
            "unit": "ns",
            "range": "± 127181.51725247996"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18632897.7,
            "unit": "ns",
            "range": "± 293339.61654714926"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46199393,
            "unit": "ns",
            "range": "± 803848.5277223468"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 91520332.85714285,
            "unit": "ns",
            "range": "± 1048178.8112979475"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 190445208.3043478,
            "unit": "ns",
            "range": "± 4805979.140131794"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 33667.941860465115,
            "unit": "ns",
            "range": "± 1833.871727855328"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 222967.15979381444,
            "unit": "ns",
            "range": "± 21747.8131993994"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 219218.68,
            "unit": "ns",
            "range": "± 22956.781542399505"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 198717.01063829788,
            "unit": "ns",
            "range": "± 23629.06801648856"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3763296.3,
            "unit": "ns",
            "range": "± 82859.42198503883"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3365418.263157895,
            "unit": "ns",
            "range": "± 74081.38033859347"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12064.151898734177,
            "unit": "ns",
            "range": "± 582.7615752209825"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 58291.269662921346,
            "unit": "ns",
            "range": "± 5844.139227706609"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 52917.09195402299,
            "unit": "ns",
            "range": "± 3424.576227839489"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 60915.802083333336,
            "unit": "ns",
            "range": "± 11024.598513868685"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3248.7096774193546,
            "unit": "ns",
            "range": "± 304.08389076490215"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12003.833333333334,
            "unit": "ns",
            "range": "± 1124.1520474752056"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1032854.14,
            "unit": "ns",
            "range": "± 101424.65931055933"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2182887.987179487,
            "unit": "ns",
            "range": "± 111415.72435638057"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1493407.5151515151,
            "unit": "ns",
            "range": "± 110280.43194986244"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6548442,
            "unit": "ns",
            "range": "± 181081.61197392992"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2864198.765625,
            "unit": "ns",
            "range": "± 131146.3115429072"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2964424.3243243243,
            "unit": "ns",
            "range": "± 147803.23147385023"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3542073.966101695,
            "unit": "ns",
            "range": "± 151556.40758635575"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3408247.52,
            "unit": "ns",
            "range": "± 136309.53033808526"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12671628.43877551,
            "unit": "ns",
            "range": "± 1698396.0733565872"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4218055.844010416,
            "unit": "ns",
            "range": "± 55604.76614290155"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1330324.3377604166,
            "unit": "ns",
            "range": "± 20062.90584136772"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 858480.0967447917,
            "unit": "ns",
            "range": "± 8062.077759327114"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2019746.2458639706,
            "unit": "ns",
            "range": "± 41143.91979795003"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 610789.9283203125,
            "unit": "ns",
            "range": "± 8319.682147681571"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 561455.6290364583,
            "unit": "ns",
            "range": "± 8188.75476312699"
          }
        ]
      }
    ]
  }
}