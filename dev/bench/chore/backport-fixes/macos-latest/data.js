window.BENCHMARK_DATA = {
  "lastUpdate": 1689903932688,
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
          "id": "5ceef2804f0ab187bbe575a75571e266756c2bfa",
          "message": "Changelog",
          "timestamp": "2023-07-21T10:29:11+09:00",
          "tree_id": "8ab99b0372c8aface09570a6bbc0942e1ca8b34d",
          "url": "https://github.com/greymistcube/libplanet/commit/5ceef2804f0ab187bbe575a75571e266756c2bfa"
        },
        "date": 1689903871046,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7896775.321428572,
            "unit": "ns",
            "range": "± 225712.91185995602"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20324279.40625,
            "unit": "ns",
            "range": "± 624801.1393257837"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50427961.34615385,
            "unit": "ns",
            "range": "± 778147.4919138452"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 99302282.45,
            "unit": "ns",
            "range": "± 3481962.342333967"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 203945259.5,
            "unit": "ns",
            "range": "± 3217818.850734387"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 56796.510869565216,
            "unit": "ns",
            "range": "± 5729.257260598647"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 308885.8432835821,
            "unit": "ns",
            "range": "± 13674.705714580145"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 293523.9552238806,
            "unit": "ns",
            "range": "± 13741.013511242412"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 300202.26470588235,
            "unit": "ns",
            "range": "± 5922.721518962079"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4124995.6428571427,
            "unit": "ns",
            "range": "± 56611.03966760594"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3742118,
            "unit": "ns",
            "range": "± 65871.97821315439"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18536.625,
            "unit": "ns",
            "range": "± 1391.464690243846"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 86858.67391304347,
            "unit": "ns",
            "range": "± 7528.045291739207"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 92719.69791666667,
            "unit": "ns",
            "range": "± 11092.070011470536"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 108374.36458333333,
            "unit": "ns",
            "range": "± 13425.514812530255"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6021.010869565217,
            "unit": "ns",
            "range": "± 1104.5410711705256"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19025.479166666668,
            "unit": "ns",
            "range": "± 2856.6039682007636"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1558379.59375,
            "unit": "ns",
            "range": "± 146076.34394428128"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2813025.635135135,
            "unit": "ns",
            "range": "± 141136.3039307809"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2064323.268041237,
            "unit": "ns",
            "range": "± 160185.3302146269"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5740742.160493827,
            "unit": "ns",
            "range": "± 286054.77571841277"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3294414.972972973,
            "unit": "ns",
            "range": "± 108797.40769314888"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3469448.8928571427,
            "unit": "ns",
            "range": "± 98399.91901131088"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4358555.0227272725,
            "unit": "ns",
            "range": "± 148089.70537348004"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3858652.839285714,
            "unit": "ns",
            "range": "± 160743.14611802011"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7028799,
            "unit": "ns",
            "range": "± 257732.7099863383"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6527868.696402616,
            "unit": "ns",
            "range": "± 240692.58924957816"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1987666.446484375,
            "unit": "ns",
            "range": "± 29343.965175224286"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1292677.0667067308,
            "unit": "ns",
            "range": "± 3432.364327953779"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3008211.893804506,
            "unit": "ns",
            "range": "± 110534.79961488572"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 858717.4059895833,
            "unit": "ns",
            "range": "± 1923.8654473814493"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 722959.2190755209,
            "unit": "ns",
            "range": "± 3707.745596050275"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dev.moreal@gmail.com",
            "name": "moreal",
            "username": "moreal"
          },
          "committer": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "distinct": true,
          "id": "88c17d2d74a05d540b93c5f9203674d4238bc344",
          "message": "docs: fix docfx toc configuration\n\n[skip changelog]",
          "timestamp": "2023-07-21T10:24:57+09:00",
          "tree_id": "cf84acef09d672e944f3593b79a09e49ca967a4d",
          "url": "https://github.com/greymistcube/libplanet/commit/88c17d2d74a05d540b93c5f9203674d4238bc344"
        },
        "date": 1689903900358,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7999668.064516129,
            "unit": "ns",
            "range": "± 240744.6357535906"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20580176.114285715,
            "unit": "ns",
            "range": "± 997813.2680573945"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51254285.10869565,
            "unit": "ns",
            "range": "± 1914177.0057314448"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 101145867.0263158,
            "unit": "ns",
            "range": "± 3052117.867088515"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 209181448.4375,
            "unit": "ns",
            "range": "± 6511103.555151773"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 73345.64893617021,
            "unit": "ns",
            "range": "± 10922.126553501283"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 342062.56451612903,
            "unit": "ns",
            "range": "± 15490.788228969686"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 314665.847826087,
            "unit": "ns",
            "range": "± 36442.92846745828"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 286437.9111111111,
            "unit": "ns",
            "range": "± 19080.335305891993"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4356595.764705882,
            "unit": "ns",
            "range": "± 175213.92107233813"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3732296.9545454546,
            "unit": "ns",
            "range": "± 90335.03322195726"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17979.863636363636,
            "unit": "ns",
            "range": "± 1488.017343102939"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 88707.76530612246,
            "unit": "ns",
            "range": "± 11173.504796349338"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 112884.02127659574,
            "unit": "ns",
            "range": "± 12491.839122651601"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 109211.47422680413,
            "unit": "ns",
            "range": "± 13529.391984130933"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6519.380434782609,
            "unit": "ns",
            "range": "± 1159.1595367769305"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19973.13440860215,
            "unit": "ns",
            "range": "± 2446.748702404115"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1626231.3870967743,
            "unit": "ns",
            "range": "± 130794.4980614738"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3028654.224137931,
            "unit": "ns",
            "range": "± 124724.07809325364"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2208400.173469388,
            "unit": "ns",
            "range": "± 218103.35650701076"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6169578.861538461,
            "unit": "ns",
            "range": "± 284045.68750510213"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3249498.347826087,
            "unit": "ns",
            "range": "± 156577.7915114801"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3498694.023809524,
            "unit": "ns",
            "range": "± 156583.29856144456"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4548030.758064516,
            "unit": "ns",
            "range": "± 134140.81368869252"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3977052.5,
            "unit": "ns",
            "range": "± 218778.35869686006"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7208013.921052632,
            "unit": "ns",
            "range": "± 244616.7472993579"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6541378.649639423,
            "unit": "ns",
            "range": "± 177446.17960588535"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2015719.8765625,
            "unit": "ns",
            "range": "± 29499.98865623392"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1238294.0678385417,
            "unit": "ns",
            "range": "± 15737.583377506326"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2782342.2650622353,
            "unit": "ns",
            "range": "± 122832.42614617554"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 828923.9410807291,
            "unit": "ns",
            "range": "± 11769.08089375686"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 825503.6959292763,
            "unit": "ns",
            "range": "± 17784.256435080846"
          }
        ]
      }
    ]
  }
}