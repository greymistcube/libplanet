window.BENCHMARK_DATA = {
  "lastUpdate": 1700981549822,
  "repoUrl": "https://github.com/greymistcube/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "ilgyu.yi@gmail.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "committer": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "distinct": true,
          "id": "0fcd4d7b6b8719507c713585f521d4de60ba5f70",
          "message": "fix: Fix AccountMetrics to initialize",
          "timestamp": "2023-11-25T17:34:56+09:00",
          "tree_id": "cff9a84c80c43d1a30d8377791ae1ddd00e5e020",
          "url": "https://github.com/greymistcube/libplanet/commit/0fcd4d7b6b8719507c713585f521d4de60ba5f70"
        },
        "date": 1700902360828,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8756077.030927835,
            "unit": "ns",
            "range": "± 555222.4854758387"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22120698.945652176,
            "unit": "ns",
            "range": "± 1201794.7279332622"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53583814.884615384,
            "unit": "ns",
            "range": "± 2197349.4260014826"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 103443851.35294117,
            "unit": "ns",
            "range": "± 2120411.3088625325"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 204329603.7857143,
            "unit": "ns",
            "range": "± 3206866.8419512967"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 56984.76344086022,
            "unit": "ns",
            "range": "± 6570.441228976294"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 296525.94505494507,
            "unit": "ns",
            "range": "± 19131.551607728255"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 287068.5076923077,
            "unit": "ns",
            "range": "± 13303.180651308398"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 279476.8125,
            "unit": "ns",
            "range": "± 5178.565782386085"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3944783.6875,
            "unit": "ns",
            "range": "± 77340.68725987096"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3723672.5,
            "unit": "ns",
            "range": "± 72806.93161780684"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18615.27659574468,
            "unit": "ns",
            "range": "± 1926.517550993258"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 83732.35714285714,
            "unit": "ns",
            "range": "± 9059.545743431047"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 87653.62244897959,
            "unit": "ns",
            "range": "± 10335.940340978868"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 92647.73737373737,
            "unit": "ns",
            "range": "± 15945.592558207563"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4539.336956521739,
            "unit": "ns",
            "range": "± 389.84435545015873"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16697.90322580645,
            "unit": "ns",
            "range": "± 1554.7085919072906"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1424962.0315789473,
            "unit": "ns",
            "range": "± 132545.86480483157"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2721641.5843373495,
            "unit": "ns",
            "range": "± 141045.96229046764"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2203318.8229166665,
            "unit": "ns",
            "range": "± 152229.2166432266"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10498575.515625,
            "unit": "ns",
            "range": "± 479128.50288765394"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3237646.0967741935,
            "unit": "ns",
            "range": "± 145292.29285367823"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3352456.255319149,
            "unit": "ns",
            "range": "± 128791.2174980462"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4366954.442307692,
            "unit": "ns",
            "range": "± 173349.81655186496"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4179847.4891304346,
            "unit": "ns",
            "range": "± 234356.11442861223"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 15132906.734042553,
            "unit": "ns",
            "range": "± 1467666.102399391"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5436621.63671875,
            "unit": "ns",
            "range": "± 57438.939590324735"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1616705.4722377232,
            "unit": "ns",
            "range": "± 25222.135330599864"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 984459.8984375,
            "unit": "ns",
            "range": "± 10994.894333757115"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2488831.4655671297,
            "unit": "ns",
            "range": "± 67746.77434678261"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 767009.6569475447,
            "unit": "ns",
            "range": "± 5700.309898117323"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 727439.6534505208,
            "unit": "ns",
            "range": "± 11163.488394119307"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ilgyu.yi@gmail.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "committer": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "distinct": true,
          "id": "a22af937ed76ef36db3ba0b1294f939dc8193d48",
          "message": "fix: Fix AccountMetrics to initialize",
          "timestamp": "2023-11-26T13:49:27+09:00",
          "tree_id": "a45679a776e3de07e65041cfde1b71ad9fcacfba",
          "url": "https://github.com/greymistcube/libplanet/commit/a22af937ed76ef36db3ba0b1294f939dc8193d48"
        },
        "date": 1700974915947,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7741780,
            "unit": "ns",
            "range": "± 104478.67616060576"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19336256.37704918,
            "unit": "ns",
            "range": "± 866634.3484644521"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46618990.071428575,
            "unit": "ns",
            "range": "± 653155.478038901"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 92603676.35714285,
            "unit": "ns",
            "range": "± 1597192.268297371"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 188495916.07142857,
            "unit": "ns",
            "range": "± 2415627.4422868486"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 33940.31764705882,
            "unit": "ns",
            "range": "± 2661.9962980357996"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 226338.57731958764,
            "unit": "ns",
            "range": "± 22196.50536300471"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 216185.05376344087,
            "unit": "ns",
            "range": "± 18119.048994482833"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 191453.52688172043,
            "unit": "ns",
            "range": "± 12617.50211325815"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3794290.15,
            "unit": "ns",
            "range": "± 77724.87111483957"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3448068.1333333333,
            "unit": "ns",
            "range": "± 58748.887832472035"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12291.390410958904,
            "unit": "ns",
            "range": "± 617.6753138818123"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 58606.45698924731,
            "unit": "ns",
            "range": "± 5510.028193556013"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 52973.34523809524,
            "unit": "ns",
            "range": "± 3767.9042223459223"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 59189.3870967742,
            "unit": "ns",
            "range": "± 10938.853283268552"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3349.3370786516853,
            "unit": "ns",
            "range": "± 534.3352485229624"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11833.417582417582,
            "unit": "ns",
            "range": "± 955.0762048238647"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1026615.5612244898,
            "unit": "ns",
            "range": "± 93414.37108550449"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2163098.511111111,
            "unit": "ns",
            "range": "± 77107.0948848012"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1506397.7916666667,
            "unit": "ns",
            "range": "± 109634.22697429337"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6704957.912087912,
            "unit": "ns",
            "range": "± 489552.27729021607"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2865967.2790697673,
            "unit": "ns",
            "range": "± 100581.62248223262"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3070694.7666666666,
            "unit": "ns",
            "range": "± 47878.30792819089"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3587819.1612903224,
            "unit": "ns",
            "range": "± 162257.6541149649"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3458678.1428571427,
            "unit": "ns",
            "range": "± 174638.5742832227"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12837609.173469387,
            "unit": "ns",
            "range": "± 2085772.9319516893"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4141839.5870535714,
            "unit": "ns",
            "range": "± 57118.41120991771"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1297081.0111979167,
            "unit": "ns",
            "range": "± 22903.539364579367"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 856185.9621394231,
            "unit": "ns",
            "range": "± 9954.758233554949"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1948938.3518229167,
            "unit": "ns",
            "range": "± 34531.3962774144"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 626839.9532552083,
            "unit": "ns",
            "range": "± 10294.137851443404"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 574683.0792317708,
            "unit": "ns",
            "range": "± 8395.504399318112"
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
          "id": "4bcec1ab9332422ae151257e73de795a2d23e80a",
          "message": "Trie based account metrics",
          "timestamp": "2023-11-26T15:36:11+09:00",
          "tree_id": "de27242853a6c6a8f8d80cc90421ec9179acfb05",
          "url": "https://github.com/greymistcube/libplanet/commit/4bcec1ab9332422ae151257e73de795a2d23e80a"
        },
        "date": 1700981535643,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7933778.223404256,
            "unit": "ns",
            "range": "± 307645.0082829588"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18267482.083333332,
            "unit": "ns",
            "range": "± 61710.018950010104"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46795551.35714286,
            "unit": "ns",
            "range": "± 593185.1952452062"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 91317312.71428572,
            "unit": "ns",
            "range": "± 1504422.2643259964"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 190291968.6818182,
            "unit": "ns",
            "range": "± 4336235.729871117"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34188.426966292136,
            "unit": "ns",
            "range": "± 2955.0827202990463"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 220955.94505494504,
            "unit": "ns",
            "range": "± 16449.704205623366"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 211462.34782608695,
            "unit": "ns",
            "range": "± 13175.437227713688"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 184713.20212765958,
            "unit": "ns",
            "range": "± 6557.7997367717835"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3724853.0454545454,
            "unit": "ns",
            "range": "± 91281.9390947771"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3484295.4,
            "unit": "ns",
            "range": "± 57266.177762645006"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12021.761363636364,
            "unit": "ns",
            "range": "± 843.9490164684826"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 58095.51136363636,
            "unit": "ns",
            "range": "± 3981.6133130405856"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 53681.684782608696,
            "unit": "ns",
            "range": "± 7223.709328315037"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 58307.796703296706,
            "unit": "ns",
            "range": "± 9921.406835160364"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3188.625,
            "unit": "ns",
            "range": "± 353.49282821254116"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11818.364583333334,
            "unit": "ns",
            "range": "± 1319.487178053749"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1028610.4536082475,
            "unit": "ns",
            "range": "± 98607.83394346143"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2163518.794117647,
            "unit": "ns",
            "range": "± 103538.91176326491"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1501877.84375,
            "unit": "ns",
            "range": "± 105388.59927124127"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6920529.028089887,
            "unit": "ns",
            "range": "± 473287.46960071474"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2859978.75,
            "unit": "ns",
            "range": "± 106146.71835949221"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3021597.5256410255,
            "unit": "ns",
            "range": "± 154454.75587391527"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3585706.1428571427,
            "unit": "ns",
            "range": "± 98714.13950344075"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3435918.8481012657,
            "unit": "ns",
            "range": "± 178068.5762892897"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 14040185.378787879,
            "unit": "ns",
            "range": "± 2465133.437653324"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4200245.897836538,
            "unit": "ns",
            "range": "± 61243.12840363371"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1268580.01640625,
            "unit": "ns",
            "range": "± 15681.43106576989"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 827377.2255208333,
            "unit": "ns",
            "range": "± 12369.242830252617"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1918656.6350260417,
            "unit": "ns",
            "range": "± 25128.48092760034"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 620787.7783203125,
            "unit": "ns",
            "range": "± 11459.476982575237"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 562334.305078125,
            "unit": "ns",
            "range": "± 7604.332947128023"
          }
        ]
      }
    ]
  }
}