window.BENCHMARK_DATA = {
  "lastUpdate": 1693402705134,
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
          "id": "39627a9e924bc1f1b1014d7348b5ca8a94fe8d78",
          "message": "Remove unnecessary interfaces from KeyBytes",
          "timestamp": "2023-08-30T22:09:21+09:00",
          "tree_id": "8e5ea6425b49c1e8d6b3377dfff3c93746040037",
          "url": "https://github.com/greymistcube/libplanet/commit/39627a9e924bc1f1b1014d7348b5ca8a94fe8d78"
        },
        "date": 1693401844470,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8119389.285714285,
            "unit": "ns",
            "range": "± 106173.69784257274"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19796843.92857143,
            "unit": "ns",
            "range": "± 233035.98705208744"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49979637.85294118,
            "unit": "ns",
            "range": "± 817015.8233056094"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 97130413.1904762,
            "unit": "ns",
            "range": "± 2281060.381439028"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 192930535.66666666,
            "unit": "ns",
            "range": "± 1834237.4107923056"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 67874.07368421053,
            "unit": "ns",
            "range": "± 11933.032502565258"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 297019.2894736842,
            "unit": "ns",
            "range": "± 13613.647847965696"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 288825.7849462366,
            "unit": "ns",
            "range": "± 20275.10559445481"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 269955.8846153846,
            "unit": "ns",
            "range": "± 15815.627849812374"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3891550.466666667,
            "unit": "ns",
            "range": "± 69396.18751041697"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3614219.1333333333,
            "unit": "ns",
            "range": "± 59556.620863638986"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16719.26966292135,
            "unit": "ns",
            "range": "± 2021.4461562997922"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 76614.35567010309,
            "unit": "ns",
            "range": "± 7124.809990141391"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 68958.86458333333,
            "unit": "ns",
            "range": "± 5264.628113261466"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 83408.03125,
            "unit": "ns",
            "range": "± 11464.696373010886"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4326.909090909091,
            "unit": "ns",
            "range": "± 432.0135065035154"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16409.626373626375,
            "unit": "ns",
            "range": "± 2038.1460020123495"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1523055.2783505155,
            "unit": "ns",
            "range": "± 160497.98869214466"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2837014.362318841,
            "unit": "ns",
            "range": "± 137022.72604850575"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1960080.1494845361,
            "unit": "ns",
            "range": "± 199583.97839287063"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5633187.6,
            "unit": "ns",
            "range": "± 213846.13468347664"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3119051.5135135134,
            "unit": "ns",
            "range": "± 105020.49750713262"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3370754.1276595746,
            "unit": "ns",
            "range": "± 130566.78839892415"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4208853.274193549,
            "unit": "ns",
            "range": "± 189674.3894391657"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3632238.585106383,
            "unit": "ns",
            "range": "± 140709.9490754605"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6808403.863636363,
            "unit": "ns",
            "range": "± 227375.4861995227"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5464364.5859375,
            "unit": "ns",
            "range": "± 64680.1859827435"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1695394.3568638393,
            "unit": "ns",
            "range": "± 8084.222265463453"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 981215.720703125,
            "unit": "ns",
            "range": "± 4690.45227588666"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2444346.28125,
            "unit": "ns",
            "range": "± 20556.788599516745"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 782819.5533203125,
            "unit": "ns",
            "range": "± 2517.1964513101952"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 719376.6307291667,
            "unit": "ns",
            "range": "± 5095.643323333774"
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
          "id": "6e453835cb77c6b3f3dc321227f3bfdfd448483f",
          "message": "Remove unnecessary interfaces from KeyBytes",
          "timestamp": "2023-08-30T22:08:35+09:00",
          "tree_id": "29dfaa733ed61c9dde318a47a1c6e553e87117a4",
          "url": "https://github.com/greymistcube/libplanet/commit/6e453835cb77c6b3f3dc321227f3bfdfd448483f"
        },
        "date": 1693401857109,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7658138.857142857,
            "unit": "ns",
            "range": "± 90076.52515402765"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19187853.541666668,
            "unit": "ns",
            "range": "± 498827.23054048873"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 47577132.5,
            "unit": "ns",
            "range": "± 1439964.062705455"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 93741546.05555555,
            "unit": "ns",
            "range": "± 1948561.2496173931"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 205283021.07142857,
            "unit": "ns",
            "range": "± 3603728.5284249797"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 57000.032608695656,
            "unit": "ns",
            "range": "± 6192.880844386652"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 315967.75268817204,
            "unit": "ns",
            "range": "± 19143.078157968353"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 331584.8764044944,
            "unit": "ns",
            "range": "± 28074.936339205822"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 318876.1304347826,
            "unit": "ns",
            "range": "± 8037.704083677061"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4159219.7613636362,
            "unit": "ns",
            "range": "± 293930.4780761606"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3780270.3243243243,
            "unit": "ns",
            "range": "± 117381.40366724147"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20891.17021276596,
            "unit": "ns",
            "range": "± 2479.705078667158"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 93568.64583333333,
            "unit": "ns",
            "range": "± 10306.44452755466"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 101418.14432989691,
            "unit": "ns",
            "range": "± 10746.972675469367"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 103786.68421052632,
            "unit": "ns",
            "range": "± 14192.522037029095"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6965.5053763440865,
            "unit": "ns",
            "range": "± 1074.9757896531187"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20351.626373626375,
            "unit": "ns",
            "range": "± 2071.350840224008"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1504012.2417582418,
            "unit": "ns",
            "range": "± 207228.74743648976"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2807154.88172043,
            "unit": "ns",
            "range": "± 217511.9372970461"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1977225.5526315789,
            "unit": "ns",
            "range": "± 231446.9124919371"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5571370.70967742,
            "unit": "ns",
            "range": "± 368997.0807735528"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3105097.465909091,
            "unit": "ns",
            "range": "± 173869.41890725997"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3555449.925531915,
            "unit": "ns",
            "range": "± 258067.26211749986"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4427213.579545454,
            "unit": "ns",
            "range": "± 300761.2858286899"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3856989.6666666665,
            "unit": "ns",
            "range": "± 326114.7575134412"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7255255.510204081,
            "unit": "ns",
            "range": "± 527222.2575164357"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5587977.13125,
            "unit": "ns",
            "range": "± 63845.58697911944"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1608505.0841346155,
            "unit": "ns",
            "range": "± 15973.556100271711"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 994045.2308872768,
            "unit": "ns",
            "range": "± 9784.817082298814"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2807929.1848958335,
            "unit": "ns",
            "range": "± 46107.508096538906"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 779108.3350306919,
            "unit": "ns",
            "range": "± 5379.904990524111"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 711063.2110126202,
            "unit": "ns",
            "range": "± 7021.5377757447195"
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
          "id": "561388db874ed37d12dbe138a5506e189cb10b0e",
          "message": "Changelog",
          "timestamp": "2023-08-30T22:14:32+09:00",
          "tree_id": "74e2f45a3550b297940bb27b9019f6ac47b420ba",
          "url": "https://github.com/greymistcube/libplanet/commit/561388db874ed37d12dbe138a5506e189cb10b0e"
        },
        "date": 1693402688457,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8731568.41025641,
            "unit": "ns",
            "range": "± 264447.5828024106"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20985740.825581394,
            "unit": "ns",
            "range": "± 773157.3341253666"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 66048272.12921348,
            "unit": "ns",
            "range": "± 14836642.261167461"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 147108072.63541666,
            "unit": "ns",
            "range": "± 43103933.35546835"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 315715441.5252525,
            "unit": "ns",
            "range": "± 70538605.4364547"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 80400.8953488372,
            "unit": "ns",
            "range": "± 6694.207587475415"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 340299.63636363635,
            "unit": "ns",
            "range": "± 41704.112510674895"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 316081.2,
            "unit": "ns",
            "range": "± 33911.83032328513"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 312247.76923076925,
            "unit": "ns",
            "range": "± 14472.011062056592"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4879973.56741573,
            "unit": "ns",
            "range": "± 727674.6510169912"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4444462.623529412,
            "unit": "ns",
            "range": "± 798796.8962367566"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 30699.883720930233,
            "unit": "ns",
            "range": "± 4019.34984548966"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 120906.84705882354,
            "unit": "ns",
            "range": "± 11933.68873490375"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 113770.25280898876,
            "unit": "ns",
            "range": "± 8695.298497517466"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 121217.93548387097,
            "unit": "ns",
            "range": "± 17726.033885224868"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8503.742268041236,
            "unit": "ns",
            "range": "± 1767.3898732685727"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22138.17032967033,
            "unit": "ns",
            "range": "± 4119.1350307098455"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1937741.9655172413,
            "unit": "ns",
            "range": "± 308077.33521175035"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3846844.5760869565,
            "unit": "ns",
            "range": "± 1002316.049611409"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2505821.8586956523,
            "unit": "ns",
            "range": "± 538272.2221512654"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7722161.4662921345,
            "unit": "ns",
            "range": "± 1821522.3989627934"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3625513.396551724,
            "unit": "ns",
            "range": "± 419319.7433282125"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4340990.136363637,
            "unit": "ns",
            "range": "± 999965.241330862"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5595557,
            "unit": "ns",
            "range": "± 1020082.7733879869"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4367798.260869565,
            "unit": "ns",
            "range": "± 673012.6390937641"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9180813.163043479,
            "unit": "ns",
            "range": "± 2627611.2041560696"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 8390687.812818877,
            "unit": "ns",
            "range": "± 1974300.837453562"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1958297.7736225328,
            "unit": "ns",
            "range": "± 221538.15631013954"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1033655.3766741072,
            "unit": "ns",
            "range": "± 23567.8024685464"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2704007.112723214,
            "unit": "ns",
            "range": "± 47280.01988029139"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 856165.7352013221,
            "unit": "ns",
            "range": "± 8772.500173708888"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 830052.5077237216,
            "unit": "ns",
            "range": "± 19897.546725231376"
          }
        ]
      }
    ]
  }
}