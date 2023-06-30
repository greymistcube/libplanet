window.BENCHMARK_DATA = {
  "lastUpdate": 1688105260807,
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
          "id": "08910b0af94fe9e356b243c6ed37f07dc619cca2",
          "message": "Move KeyConverters",
          "timestamp": "2023-06-30T11:40:45+09:00",
          "tree_id": "597224e5572792ee3be3cb7d08fe6365a148d443",
          "url": "https://github.com/greymistcube/libplanet/commit/08910b0af94fe9e356b243c6ed37f07dc619cca2"
        },
        "date": 1688094571594,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7759085.4,
            "unit": "ns",
            "range": "± 48009.3334598299"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19500900.466666665,
            "unit": "ns",
            "range": "± 84493.47562374832"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50843972.06666667,
            "unit": "ns",
            "range": "± 486200.2656389158"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 98159873.53333333,
            "unit": "ns",
            "range": "± 834414.962389549"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 200915145.2,
            "unit": "ns",
            "range": "± 1873369.6037159583"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 44790.09756097561,
            "unit": "ns",
            "range": "± 2234.309270510749"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 282399.05263157893,
            "unit": "ns",
            "range": "± 6216.385163185758"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 272167.9375,
            "unit": "ns",
            "range": "± 4922.874261631444"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 230322.53846153847,
            "unit": "ns",
            "range": "± 2324.6935860949006"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4215448.4,
            "unit": "ns",
            "range": "± 28246.91523436042"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3847456.2,
            "unit": "ns",
            "range": "± 40095.984186520654"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16498.378947368423,
            "unit": "ns",
            "range": "± 1123.5792653433573"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 83134.92207792208,
            "unit": "ns",
            "range": "± 4093.326445396836"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 70449.85714285714,
            "unit": "ns",
            "range": "± 815.9374841383242"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 85759.64948453609,
            "unit": "ns",
            "range": "± 12044.311366471966"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4508.20618556701,
            "unit": "ns",
            "range": "± 532.2189387003624"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16115.278350515464,
            "unit": "ns",
            "range": "± 1250.8837521117825"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1388354.418367347,
            "unit": "ns",
            "range": "± 95830.92850560222"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2629764.864864865,
            "unit": "ns",
            "range": "± 87348.65940050005"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1785236.3333333333,
            "unit": "ns",
            "range": "± 116664.22773128738"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4868087.12,
            "unit": "ns",
            "range": "± 119879.7634059922"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6368539.117708334,
            "unit": "ns",
            "range": "± 16627.29117421209"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2016848.7161458333,
            "unit": "ns",
            "range": "± 1519.885022174872"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1384886.4874441964,
            "unit": "ns",
            "range": "± 779.7364999788367"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2583899.8504464286,
            "unit": "ns",
            "range": "± 1579.0232306210457"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 819695.2814453125,
            "unit": "ns",
            "range": "± 572.9434683943782"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 737269.5498744419,
            "unit": "ns",
            "range": "± 479.0704270080938"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3258379.294117647,
            "unit": "ns",
            "range": "± 63429.15490506387"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3414571.1739130435,
            "unit": "ns",
            "range": "± 81264.87278291232"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4327008.066666666,
            "unit": "ns",
            "range": "± 52233.82508553884"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3791216.533333333,
            "unit": "ns",
            "range": "± 60732.78488694396"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6249890.185185186,
            "unit": "ns",
            "range": "± 170482.10425122612"
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
          "id": "5df2998d3b17ea44161fc3a351c346408e26b893",
          "message": "Changelog",
          "timestamp": "2023-06-30T12:00:26+09:00",
          "tree_id": "f60c43e0317c439fc9293135883f8bff07a65377",
          "url": "https://github.com/greymistcube/libplanet/commit/5df2998d3b17ea44161fc3a351c346408e26b893"
        },
        "date": 1688095108738,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8666694.956989247,
            "unit": "ns",
            "range": "± 690431.1999327245"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24170505.70707071,
            "unit": "ns",
            "range": "± 2074035.2272149713"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 64663792.828282826,
            "unit": "ns",
            "range": "± 3844138.504387341"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 129731148.54117647,
            "unit": "ns",
            "range": "± 6987899.226129388"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 257648795.1973684,
            "unit": "ns",
            "range": "± 12886470.825418672"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 64766.69662921348,
            "unit": "ns",
            "range": "± 8665.326762191757"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 361958.79591836734,
            "unit": "ns",
            "range": "± 57860.996066374224"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 350367.3052631579,
            "unit": "ns",
            "range": "± 47337.169134649565"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 295147.39795918367,
            "unit": "ns",
            "range": "± 52579.16534607106"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4818839.684210527,
            "unit": "ns",
            "range": "± 531964.8155654869"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4654491.5360824745,
            "unit": "ns",
            "range": "± 505788.62464709213"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 31246.20408163265,
            "unit": "ns",
            "range": "± 9181.183688211679"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 112693.06382978724,
            "unit": "ns",
            "range": "± 18458.484476174424"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 114260.72826086957,
            "unit": "ns",
            "range": "± 22929.05782515981"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 137944.27659574468,
            "unit": "ns",
            "range": "± 21136.364940320604"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 11997.15,
            "unit": "ns",
            "range": "± 9404.80696065431"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 30784.79381443299,
            "unit": "ns",
            "range": "± 8639.29479415872"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1714020.1979166667,
            "unit": "ns",
            "range": "± 226629.00027316247"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3097869.6666666665,
            "unit": "ns",
            "range": "± 315927.10321708344"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2184226.3870967743,
            "unit": "ns",
            "range": "± 301310.3093006059"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6274649.092783505,
            "unit": "ns",
            "range": "± 755935.5582296418"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7219518.021354167,
            "unit": "ns",
            "range": "± 102261.08818526493"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2158496.834455819,
            "unit": "ns",
            "range": "± 63214.73535812088"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1543226.8220358456,
            "unit": "ns",
            "range": "± 31460.749230783025"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2870019.5591947115,
            "unit": "ns",
            "range": "± 47605.71240133495"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 997328.436557112,
            "unit": "ns",
            "range": "± 28985.535070266502"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 930695.5098031851,
            "unit": "ns",
            "range": "± 13878.076905305239"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3774737.824742268,
            "unit": "ns",
            "range": "± 517617.25090215093"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3957365.436170213,
            "unit": "ns",
            "range": "± 420644.60653962055"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5295265.53125,
            "unit": "ns",
            "range": "± 481461.1015436442"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4416862.56701031,
            "unit": "ns",
            "range": "± 519433.8201027134"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8012825.9387755105,
            "unit": "ns",
            "range": "± 687089.4453933677"
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
          "id": "32a2560ed058199c038d2c9b6cd64e02d5a39d9d",
          "message": "Changelog",
          "timestamp": "2023-06-30T14:55:17+09:00",
          "tree_id": "3c96268fafe854264ee3312471a2c2e151e08e15",
          "url": "https://github.com/greymistcube/libplanet/commit/32a2560ed058199c038d2c9b6cd64e02d5a39d9d"
        },
        "date": 1688105253166,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7639262.6,
            "unit": "ns",
            "range": "± 46761.44573990109"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22002533.8,
            "unit": "ns",
            "range": "± 113926.23082829897"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51090471.666666664,
            "unit": "ns",
            "range": "± 361226.91871091357"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 101971750.46666667,
            "unit": "ns",
            "range": "± 733044.913913472"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 203853735.2,
            "unit": "ns",
            "range": "± 1116614.778190069"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46724.77777777778,
            "unit": "ns",
            "range": "± 2306.753747440373"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 287582.93548387097,
            "unit": "ns",
            "range": "± 8680.451604747623"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 270810.4285714286,
            "unit": "ns",
            "range": "± 8681.10766274102"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 238417.17857142858,
            "unit": "ns",
            "range": "± 6795.686965811594"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4256199.666666667,
            "unit": "ns",
            "range": "± 28326.880221712345"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3878194.5714285714,
            "unit": "ns",
            "range": "± 25641.168825255892"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18070.473684210527,
            "unit": "ns",
            "range": "± 1585.3685512993652"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 87255.54651162791,
            "unit": "ns",
            "range": "± 4583.673170406605"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 73099.91666666667,
            "unit": "ns",
            "range": "± 1060.891602579756"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 89289.55102040817,
            "unit": "ns",
            "range": "± 11588.793744876455"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4558.122448979592,
            "unit": "ns",
            "range": "± 539.9631385911815"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17724.639175257733,
            "unit": "ns",
            "range": "± 1858.5206997410546"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1399720.48,
            "unit": "ns",
            "range": "± 104489.41016029358"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2616436.1052631577,
            "unit": "ns",
            "range": "± 90146.65347382097"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1775156.517647059,
            "unit": "ns",
            "range": "± 92452.56244402826"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4859668.4375,
            "unit": "ns",
            "range": "± 150009.9654605648"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6351398.729352678,
            "unit": "ns",
            "range": "± 13678.047313945592"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1914923.5525948661,
            "unit": "ns",
            "range": "± 6501.3797024678715"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1384918.7205729166,
            "unit": "ns",
            "range": "± 607.7398251380309"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2586210.5984933036,
            "unit": "ns",
            "range": "± 1252.1183393760207"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 814375.01171875,
            "unit": "ns",
            "range": "± 2788.446342476643"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 740142.484375,
            "unit": "ns",
            "range": "± 469.5860205596449"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3367629.2666666666,
            "unit": "ns",
            "range": "± 57269.34600323366"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3468208.88,
            "unit": "ns",
            "range": "± 87639.6653739618"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4357379.066666666,
            "unit": "ns",
            "range": "± 67550.92422066975"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3837300.933333333,
            "unit": "ns",
            "range": "± 63617.52414509999"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6345669.741935484,
            "unit": "ns",
            "range": "± 162826.24366278056"
          }
        ]
      }
    ]
  }
}