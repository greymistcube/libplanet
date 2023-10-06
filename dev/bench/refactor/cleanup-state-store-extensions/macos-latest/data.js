window.BENCHMARK_DATA = {
  "lastUpdate": 1696575641132,
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
          "id": "a7262433136bc8624a3b123bb7834f73ccd77f45",
          "message": "Remove more",
          "timestamp": "2023-10-06T14:17:58+09:00",
          "tree_id": "57f5b62f0971a37b87bbbfbace9bff439ab8d517",
          "url": "https://github.com/greymistcube/libplanet/commit/a7262433136bc8624a3b123bb7834f73ccd77f45"
        },
        "date": 1696570908724,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8483180.076923076,
            "unit": "ns",
            "range": "± 226989.97783341416"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20955825,
            "unit": "ns",
            "range": "± 442220.04160971055"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53750677,
            "unit": "ns",
            "range": "± 1770539.6143305253"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 108554200.07142857,
            "unit": "ns",
            "range": "± 1602874.3480763386"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 208127547.63636363,
            "unit": "ns",
            "range": "± 5096132.261977243"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 65380.35632183908,
            "unit": "ns",
            "range": "± 9483.170851293055"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 323824.5777777778,
            "unit": "ns",
            "range": "± 30161.0876264184"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 318368.25,
            "unit": "ns",
            "range": "± 31135.883169407785"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 287321.82558139536,
            "unit": "ns",
            "range": "± 20474.733895673267"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4452958.488095238,
            "unit": "ns",
            "range": "± 238645.61270387328"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3958519.087301587,
            "unit": "ns",
            "range": "± 179884.34864025874"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18788.081395348836,
            "unit": "ns",
            "range": "± 2637.462298431921"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 88306.97849462366,
            "unit": "ns",
            "range": "± 10770.607831721936"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 82997.84444444445,
            "unit": "ns",
            "range": "± 11128.313270446402"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 81416.6043956044,
            "unit": "ns",
            "range": "± 12096.746338379242"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4840.635294117647,
            "unit": "ns",
            "range": "± 553.5970222329688"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19538.32183908046,
            "unit": "ns",
            "range": "± 4560.007844990837"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1532925.7840909092,
            "unit": "ns",
            "range": "± 153952.830643432"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3131002.11627907,
            "unit": "ns",
            "range": "± 282615.7072194208"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2513908.8863636362,
            "unit": "ns",
            "range": "± 290159.93262140884"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 11795128.885057472,
            "unit": "ns",
            "range": "± 676752.9687803272"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3388223.294117647,
            "unit": "ns",
            "range": "± 161236.21708287438"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3696438.3414634145,
            "unit": "ns",
            "range": "± 195439.50562196606"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4591988.779220779,
            "unit": "ns",
            "range": "± 217976.5820806653"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4513347.878787879,
            "unit": "ns",
            "range": "± 210975.9857604298"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12754829.19402985,
            "unit": "ns",
            "range": "± 604339.9187622665"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5368410.3875,
            "unit": "ns",
            "range": "± 76162.50754474012"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1755935.6848493305,
            "unit": "ns",
            "range": "± 19995.008380609324"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1049477.9725060095,
            "unit": "ns",
            "range": "± 10655.209119434367"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2597272.9203125,
            "unit": "ns",
            "range": "± 48228.219868485765"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 854147.1822265625,
            "unit": "ns",
            "range": "± 11529.223511576189"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 784304.5535606971,
            "unit": "ns",
            "range": "± 5260.101774126633"
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
          "id": "696d8b7b6554142aa07f2a9a8eb0088e5a5375b2",
          "message": "Remove unnecessary code",
          "timestamp": "2023-10-06T15:40:27+09:00",
          "tree_id": "b786885bc365a6a510c9b491a85425a6cc814ab1",
          "url": "https://github.com/greymistcube/libplanet/commit/696d8b7b6554142aa07f2a9a8eb0088e5a5375b2"
        },
        "date": 1696575299835,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7482000.214285715,
            "unit": "ns",
            "range": "± 125174.05287004208"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18760827.6,
            "unit": "ns",
            "range": "± 346074.44954204373"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46601010.89473684,
            "unit": "ns",
            "range": "± 977980.2279556061"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 91019774.57142857,
            "unit": "ns",
            "range": "± 1013391.1834207356"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 210909254.2857143,
            "unit": "ns",
            "range": "± 2038175.934161887"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 52684.005494505494,
            "unit": "ns",
            "range": "± 5506.771270946799"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 283279.9868421053,
            "unit": "ns",
            "range": "± 14245.528880312748"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 270640.1,
            "unit": "ns",
            "range": "± 13546.969892969153"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 256586.52564102566,
            "unit": "ns",
            "range": "± 13137.190840801763"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3777241.2666666666,
            "unit": "ns",
            "range": "± 66245.98775501875"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3468676.4285714286,
            "unit": "ns",
            "range": "± 83595.19543540524"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17182.284090909092,
            "unit": "ns",
            "range": "± 2239.56698887866"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 78474.59574468085,
            "unit": "ns",
            "range": "± 7165.1900800472495"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 70536.05494505494,
            "unit": "ns",
            "range": "± 6144.23512889682"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 78190.94623655915,
            "unit": "ns",
            "range": "± 8878.33095650106"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4444.488636363636,
            "unit": "ns",
            "range": "± 479.6604161403276"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17221.37777777778,
            "unit": "ns",
            "range": "± 1958.4479499170593"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1344486.547368421,
            "unit": "ns",
            "range": "± 113900.62790411878"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2647089.4710144927,
            "unit": "ns",
            "range": "± 127225.57834263043"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2164636.8947368423,
            "unit": "ns",
            "range": "± 188768.75329678602"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10337270.92,
            "unit": "ns",
            "range": "± 517665.4506864438"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2969193.5581395347,
            "unit": "ns",
            "range": "± 156384.140683398"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3210853.1756756757,
            "unit": "ns",
            "range": "± 108241.57546819215"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4140091.4183673467,
            "unit": "ns",
            "range": "± 164815.64435729355"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3982219.604651163,
            "unit": "ns",
            "range": "± 216321.94690301872"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 14517261.68478261,
            "unit": "ns",
            "range": "± 1585571.241221144"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5211332.847916666,
            "unit": "ns",
            "range": "± 31064.447307932984"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1649419.0533854167,
            "unit": "ns",
            "range": "± 8075.5114498702105"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 939835.171875,
            "unit": "ns",
            "range": "± 4986.9928536769585"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2306378.343489583,
            "unit": "ns",
            "range": "± 13933.492233147754"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 731228.5807059152,
            "unit": "ns",
            "range": "± 4208.832109681589"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 675652.8317522322,
            "unit": "ns",
            "range": "± 2374.5577552815353"
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
          "id": "4bc58cedb91aad1cea3054870db6ea9944b1bc9a",
          "message": "Changelog",
          "timestamp": "2023-10-06T15:42:32+09:00",
          "tree_id": "983f3967a5ba2a637eee58e9b864e38fff9e71d1",
          "url": "https://github.com/greymistcube/libplanet/commit/4bc58cedb91aad1cea3054870db6ea9944b1bc9a"
        },
        "date": 1696575626256,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9090548.920454545,
            "unit": "ns",
            "range": "± 844543.9891166491"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21779841.052083332,
            "unit": "ns",
            "range": "± 1383032.4509806274"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54347132.666666664,
            "unit": "ns",
            "range": "± 1805583.7323731624"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 107976275.23076923,
            "unit": "ns",
            "range": "± 1276578.8089360923"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 224864646.9516129,
            "unit": "ns",
            "range": "± 6442222.0642653"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 69546.22340425532,
            "unit": "ns",
            "range": "± 9806.120484418405"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 328798.1011235955,
            "unit": "ns",
            "range": "± 27556.10382558601"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 291673.632183908,
            "unit": "ns",
            "range": "± 17727.743809092364"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 308977.9659090909,
            "unit": "ns",
            "range": "± 17987.311313747672"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3987860.588235294,
            "unit": "ns",
            "range": "± 127202.10760644762"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3692086.25,
            "unit": "ns",
            "range": "± 68835.94271454412"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18581.659340659342,
            "unit": "ns",
            "range": "± 1797.7851325066026"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 96254.55102040817,
            "unit": "ns",
            "range": "± 16301.687009734589"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 116145.76595744681,
            "unit": "ns",
            "range": "± 20251.96570211084"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 117857.71578947369,
            "unit": "ns",
            "range": "± 24139.45574253953"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6977.44623655914,
            "unit": "ns",
            "range": "± 1428.2213807023984"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16876.68131868132,
            "unit": "ns",
            "range": "± 1823.0199967155895"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1472533.2395833333,
            "unit": "ns",
            "range": "± 163412.20635637286"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2843983.4444444445,
            "unit": "ns",
            "range": "± 156831.64074778705"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2291464.4795918367,
            "unit": "ns",
            "range": "± 183249.12808023003"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10434352.722222222,
            "unit": "ns",
            "range": "± 477073.8065663339"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3384328.638297872,
            "unit": "ns",
            "range": "± 254463.51859290092"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3645517.4081632653,
            "unit": "ns",
            "range": "± 295222.3473645583"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4456019.760416667,
            "unit": "ns",
            "range": "± 273781.55084697285"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4550318.126262627,
            "unit": "ns",
            "range": "± 397519.0567987592"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 15823899.617021276,
            "unit": "ns",
            "range": "± 1785108.5726147979"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5704251.857886905,
            "unit": "ns",
            "range": "± 258970.95711770497"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1652638.2196614584,
            "unit": "ns",
            "range": "± 11353.553607083113"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 988763.8299479167,
            "unit": "ns",
            "range": "± 5130.2401115703615"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2523784.144634046,
            "unit": "ns",
            "range": "± 86875.941552393"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 816807.3540482954,
            "unit": "ns",
            "range": "± 19000.564532850614"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 733721.5590424408,
            "unit": "ns",
            "range": "± 24806.42614709607"
          }
        ]
      }
    ]
  }
}