window.BENCHMARK_DATA = {
  "lastUpdate": 1684732632490,
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
          "id": "68d72fa93f4e3833d3644989a12e7ee6a6104083",
          "message": "Remove PolymorphicAction",
          "timestamp": "2023-05-20T02:15:50+09:00",
          "tree_id": "cc65e3b81a1823674df671524a9a003f9bb5bec4",
          "url": "https://github.com/greymistcube/libplanet/commit/68d72fa93f4e3833d3644989a12e7ee6a6104083"
        },
        "date": 1684517767350,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1666686.170212766,
            "unit": "ns",
            "range": "± 158706.1773235651"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3077561.5384615385,
            "unit": "ns",
            "range": "± 125893.40052451497"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2599097.8947368423,
            "unit": "ns",
            "range": "± 162378.19459714132"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6369728.571428572,
            "unit": "ns",
            "range": "± 309698.27258382936"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 56675.555555555555,
            "unit": "ns",
            "range": "± 3772.44030670671"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8986088.235294119,
            "unit": "ns",
            "range": "± 177180.19035135157"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23856206.666666668,
            "unit": "ns",
            "range": "± 436023.89919208176"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 59890800,
            "unit": "ns",
            "range": "± 1264622.1011921028"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 122683118.18181819,
            "unit": "ns",
            "range": "± 2881579.0685360534"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 240632025,
            "unit": "ns",
            "range": "± 4688169.319254586"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5878798.4375,
            "unit": "ns",
            "range": "± 106488.7704644845"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1899419.2908653845,
            "unit": "ns",
            "range": "± 11617.23089690119"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1431672.6041666667,
            "unit": "ns",
            "range": "± 17023.44786144256"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3214311.328125,
            "unit": "ns",
            "range": "± 37988.78999642124"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1032415.4188368055,
            "unit": "ns",
            "range": "± 20986.76157893183"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 919373.22265625,
            "unit": "ns",
            "range": "± 14050.311983801674"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3843025.925925926,
            "unit": "ns",
            "range": "± 106857.85883266608"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4033847.3684210526,
            "unit": "ns",
            "range": "± 166892.63882729172"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4947535.294117647,
            "unit": "ns",
            "range": "± 151348.81421756296"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5000525,
            "unit": "ns",
            "range": "± 188295.46214348817"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7838025,
            "unit": "ns",
            "range": "± 223252.48723262985"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 307627.4193548387,
            "unit": "ns",
            "range": "± 13389.256389871605"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 296317.5438596491,
            "unit": "ns",
            "range": "± 12883.462860901202"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 273835.9550561798,
            "unit": "ns",
            "range": "± 15138.326189382327"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4828516.666666667,
            "unit": "ns",
            "range": "± 73860.19758895035"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4281792.307692308,
            "unit": "ns",
            "range": "± 44030.94482933681"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24544.791666666668,
            "unit": "ns",
            "range": "± 1947.4069015875646"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 104234.40860215054,
            "unit": "ns",
            "range": "± 7624.410092985039"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 90095.78947368421,
            "unit": "ns",
            "range": "± 6288.623903009707"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 106775.86206896552,
            "unit": "ns",
            "range": "± 9230.661312160877"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7071.578947368421,
            "unit": "ns",
            "range": "± 1034.990302955369"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23014.432989690722,
            "unit": "ns",
            "range": "± 2838.940151811413"
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
          "id": "95d887e57ce3c9a1779716672eea7969c4d62491",
          "message": "Changelog",
          "timestamp": "2023-05-22T12:12:20+09:00",
          "tree_id": "ec07b14753be0b72ac4ba6e426c5ef9c56011830",
          "url": "https://github.com/greymistcube/libplanet/commit/95d887e57ce3c9a1779716672eea7969c4d62491"
        },
        "date": 1684725978071,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1355615,
            "unit": "ns",
            "range": "± 137473.3938445964"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2439250.8771929825,
            "unit": "ns",
            "range": "± 104369.89529485811"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2103436,
            "unit": "ns",
            "range": "± 138992.7979530892"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4942689.130434782,
            "unit": "ns",
            "range": "± 171947.94719883607"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 43610.71428571428,
            "unit": "ns",
            "range": "± 1840.3239409930547"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6772626.666666667,
            "unit": "ns",
            "range": "± 37540.5013031957"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17445450,
            "unit": "ns",
            "range": "± 75028.80216187751"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 45519680,
            "unit": "ns",
            "range": "± 325949.0696412555"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 90430680,
            "unit": "ns",
            "range": "± 608026.4294067676"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 179980493.33333334,
            "unit": "ns",
            "range": "± 1247234.3246826823"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4827463.448660715,
            "unit": "ns",
            "range": "± 11094.211508457105"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1503736.0514322917,
            "unit": "ns",
            "range": "± 1172.0473401279878"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1133325.3305288462,
            "unit": "ns",
            "range": "± 2032.5557676762614"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2638085.4166666665,
            "unit": "ns",
            "range": "± 20850.462526804313"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 808012.65625,
            "unit": "ns",
            "range": "± 4665.365124503089"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 735449.3024553572,
            "unit": "ns",
            "range": "± 4446.610356866644"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3075136.6666666665,
            "unit": "ns",
            "range": "± 57040.91096581053"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3074760.5263157897,
            "unit": "ns",
            "range": "± 105253.29946545218"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3939740,
            "unit": "ns",
            "range": "± 65998.50431205674"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3867744.776119403,
            "unit": "ns",
            "range": "± 161279.980800923"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6405381.632653061,
            "unit": "ns",
            "range": "± 242845.79012330488"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 255551.7857142857,
            "unit": "ns",
            "range": "± 10956.417647312357"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 245765.625,
            "unit": "ns",
            "range": "± 7325.941946482091"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 221483.8383838384,
            "unit": "ns",
            "range": "± 13175.245085980543"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3805830,
            "unit": "ns",
            "range": "± 33088.84576841136"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3566396.6666666665,
            "unit": "ns",
            "range": "± 44364.33359398172"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17854.255319148935,
            "unit": "ns",
            "range": "± 1972.0446729665387"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 78583.908045977,
            "unit": "ns",
            "range": "± 4315.786962736369"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 66186.58536585367,
            "unit": "ns",
            "range": "± 3325.1292444990318"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 82043.68421052632,
            "unit": "ns",
            "range": "± 10730.507419208292"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4393.877551020408,
            "unit": "ns",
            "range": "± 694.7618929852558"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16240,
            "unit": "ns",
            "range": "± 1750.2826519457158"
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
          "id": "5423ff33b66e70ae65bcdbef996c037f30396db5",
          "message": "Changelog",
          "timestamp": "2023-05-22T13:57:42+09:00",
          "tree_id": "80f9f918cebab334c9d308a5e653f13a84354a8d",
          "url": "https://github.com/greymistcube/libplanet/commit/5423ff33b66e70ae65bcdbef996c037f30396db5"
        },
        "date": 1684732607872,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1741492.7835051545,
            "unit": "ns",
            "range": "± 233686.74244212708"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3120737.1134020616,
            "unit": "ns",
            "range": "± 320183.03857571963"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2673773.737373737,
            "unit": "ns",
            "range": "± 311229.9712712806"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6731380.808080808,
            "unit": "ns",
            "range": "± 623560.9162387945"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 60842.26804123711,
            "unit": "ns",
            "range": "± 13900.268545454035"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8842420.6185567,
            "unit": "ns",
            "range": "± 594304.5627626013"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23749362,
            "unit": "ns",
            "range": "± 1435079.3042374018"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 60212467.741935484,
            "unit": "ns",
            "range": "± 2741122.2882735874"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 122414553.19148937,
            "unit": "ns",
            "range": "± 4739469.193900858"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 246090618.75,
            "unit": "ns",
            "range": "± 7518552.483687243"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5679141.770833333,
            "unit": "ns",
            "range": "± 68714.59570194238"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1850603.1558388157,
            "unit": "ns",
            "range": "± 62719.49116836716"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1422842.7445023148,
            "unit": "ns",
            "range": "± 39237.169134186785"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3037110.1822916665,
            "unit": "ns",
            "range": "± 54414.19104545139"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 995395.3255208334,
            "unit": "ns",
            "range": "± 15709.92426421634"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 917916.81640625,
            "unit": "ns",
            "range": "± 10083.243955937422"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3637630,
            "unit": "ns",
            "range": "± 358008.2075409259"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3690278.5714285714,
            "unit": "ns",
            "range": "± 358474.9370094338"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4920984.848484849,
            "unit": "ns",
            "range": "± 452779.86234778696"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4733521.212121212,
            "unit": "ns",
            "range": "± 417594.3611494555"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8187396.907216495,
            "unit": "ns",
            "range": "± 549418.359391246"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 332253.6082474227,
            "unit": "ns",
            "range": "± 50002.71672172687"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 302683.67346938775,
            "unit": "ns",
            "range": "± 47097.19429093251"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 262278.72340425535,
            "unit": "ns",
            "range": "± 42904.07623399628"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4737822.680412371,
            "unit": "ns",
            "range": "± 358324.67019716516"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4381927.083333333,
            "unit": "ns",
            "range": "± 353568.60317837715"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21686.315789473683,
            "unit": "ns",
            "range": "± 6124.0650267945075"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 102824,
            "unit": "ns",
            "range": "± 26164.445456775997"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 105442.39130434782,
            "unit": "ns",
            "range": "± 22702.123799064597"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 132357.29166666666,
            "unit": "ns",
            "range": "± 30083.643902999112"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7049.450549450549,
            "unit": "ns",
            "range": "± 1625.65362077833"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23776.288659793816,
            "unit": "ns",
            "range": "± 8637.584698039584"
          }
        ]
      }
    ]
  }
}