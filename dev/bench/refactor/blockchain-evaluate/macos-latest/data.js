window.BENCHMARK_DATA = {
  "lastUpdate": 1693800538273,
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
          "id": "aa648e7190f598c9d6958fd46da135d82142a85b",
          "message": "Minor changes",
          "timestamp": "2023-09-04T12:10:43+09:00",
          "tree_id": "0e30da4a540935e01029fe8a98862a01b934b52b",
          "url": "https://github.com/greymistcube/libplanet/commit/aa648e7190f598c9d6958fd46da135d82142a85b"
        },
        "date": 1693798134922,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8081682.739130435,
            "unit": "ns",
            "range": "± 197809.04123357715"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20109804.923076924,
            "unit": "ns",
            "range": "± 483165.7909675248"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49261333.25,
            "unit": "ns",
            "range": "± 1260625.0947867525"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 101122114,
            "unit": "ns",
            "range": "± 2073731.4486307045"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 211375542.14,
            "unit": "ns",
            "range": "± 5515930.041094505"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 70354.20833333333,
            "unit": "ns",
            "range": "± 9483.886803600555"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 322680.86363636365,
            "unit": "ns",
            "range": "± 17715.169832972988"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 306103.46428571426,
            "unit": "ns",
            "range": "± 16280.389283293462"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 296877.3333333333,
            "unit": "ns",
            "range": "± 9364.23157440944"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4167405.8571428573,
            "unit": "ns",
            "range": "± 47906.08465225258"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3684479.285714286,
            "unit": "ns",
            "range": "± 49347.360899239386"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22194.5,
            "unit": "ns",
            "range": "± 3364.5149012648662"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 108361.0052631579,
            "unit": "ns",
            "range": "± 12811.227253545747"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 102103.11224489796,
            "unit": "ns",
            "range": "± 9672.061520660223"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 113835.11224489796,
            "unit": "ns",
            "range": "± 13090.52446547065"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7618.978723404255,
            "unit": "ns",
            "range": "± 981.4009185767552"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23400.41489361702,
            "unit": "ns",
            "range": "± 2899.1868656446295"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1824451.2142857143,
            "unit": "ns",
            "range": "± 27883.316125979683"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2869950.984375,
            "unit": "ns",
            "range": "± 132534.25480612786"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1946520.904494382,
            "unit": "ns",
            "range": "± 115636.73870817093"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5547733.3125,
            "unit": "ns",
            "range": "± 215026.52502687735"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3191540.0714285714,
            "unit": "ns",
            "range": "± 147986.12662535137"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3454046.8333333335,
            "unit": "ns",
            "range": "± 42885.245222429105"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4334576.88,
            "unit": "ns",
            "range": "± 148070.08984091118"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3905726.8076923075,
            "unit": "ns",
            "range": "± 135990.3322127124"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6751289.487179487,
            "unit": "ns",
            "range": "± 222338.20650305078"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5503936.524553572,
            "unit": "ns",
            "range": "± 46958.76999402544"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1728700.7134486607,
            "unit": "ns",
            "range": "± 12638.221822273183"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1005842.4196213942,
            "unit": "ns",
            "range": "± 3424.982512990471"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2567460.781550481,
            "unit": "ns",
            "range": "± 37890.69696338089"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 775941.8727678572,
            "unit": "ns",
            "range": "± 1854.8439764940117"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 720592.6173967634,
            "unit": "ns",
            "range": "± 4233.151244416015"
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
          "id": "caa63db381810757bf0683c4bf33c7dc5a705cbc",
          "message": "Minor changes",
          "timestamp": "2023-09-04T12:19:07+09:00",
          "tree_id": "c720e196c10642a1107489dfcedad0ac13713150",
          "url": "https://github.com/greymistcube/libplanet/commit/caa63db381810757bf0683c4bf33c7dc5a705cbc"
        },
        "date": 1693798530278,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9316830.67204301,
            "unit": "ns",
            "range": "± 524369.7461087188"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23004517.959183674,
            "unit": "ns",
            "range": "± 2172350.3058988834"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54831269,
            "unit": "ns",
            "range": "± 1704860.2871237209"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 104210194.68518518,
            "unit": "ns",
            "range": "± 2892727.649284403"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 211432357.08333334,
            "unit": "ns",
            "range": "± 2164903.306304567"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 65121.87755102041,
            "unit": "ns",
            "range": "± 11016.968625542686"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 311788.7978723404,
            "unit": "ns",
            "range": "± 31593.103129414205"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 307996.7888888889,
            "unit": "ns",
            "range": "± 21178.525520948057"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 278766.70652173914,
            "unit": "ns",
            "range": "± 16334.647020567982"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4066468.714285714,
            "unit": "ns",
            "range": "± 62826.00241011014"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3599167.6875,
            "unit": "ns",
            "range": "± 109409.88804386083"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20755.957894736843,
            "unit": "ns",
            "range": "± 4399.534044273203"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 114208.09677419355,
            "unit": "ns",
            "range": "± 18919.600584684955"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 109778.59677419355,
            "unit": "ns",
            "range": "± 16180.320261424742"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 106430.12365591398,
            "unit": "ns",
            "range": "± 19313.858291006658"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5708.547368421053,
            "unit": "ns",
            "range": "± 1315.1525497505381"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17988.875,
            "unit": "ns",
            "range": "± 2652.1953180833343"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1568506.737113402,
            "unit": "ns",
            "range": "± 181948.61663362847"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2914981.967391304,
            "unit": "ns",
            "range": "± 172042.07250748074"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2086039.3535353534,
            "unit": "ns",
            "range": "± 226956.33750063085"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5555813.94117647,
            "unit": "ns",
            "range": "± 235003.66739392283"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3375611.7395833335,
            "unit": "ns",
            "range": "± 193280.04029976515"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3475808.6896551726,
            "unit": "ns",
            "range": "± 151246.46647102924"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4358873.679104477,
            "unit": "ns",
            "range": "± 205362.46843561126"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3932691.2674418604,
            "unit": "ns",
            "range": "± 213841.5345258328"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6827984.223404256,
            "unit": "ns",
            "range": "± 264054.33692582074"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6248191.998177083,
            "unit": "ns",
            "range": "± 67920.46658038347"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1727317.1075892858,
            "unit": "ns",
            "range": "± 56231.95939097299"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1004633.0611328125,
            "unit": "ns",
            "range": "± 22751.762852038424"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2524576.2236979166,
            "unit": "ns",
            "range": "± 44600.83003739742"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 829214.4123697917,
            "unit": "ns",
            "range": "± 6538.993198704538"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 756990.5166015625,
            "unit": "ns",
            "range": "± 11216.800918510777"
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
          "id": "4be7d1da6e8afe4c52f64578875a8f0c0b5200d7",
          "message": "Minor changes",
          "timestamp": "2023-09-04T12:53:37+09:00",
          "tree_id": "20a322fc42461e47197f99c18ecb61a0f8e92264",
          "url": "https://github.com/greymistcube/libplanet/commit/4be7d1da6e8afe4c52f64578875a8f0c0b5200d7"
        },
        "date": 1693800525349,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8210274.952380952,
            "unit": "ns",
            "range": "± 193075.91363747994"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20472426.16129032,
            "unit": "ns",
            "range": "± 611811.1706088244"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52151878.96341463,
            "unit": "ns",
            "range": "± 1855022.5197681305"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 102196360.2,
            "unit": "ns",
            "range": "± 1632104.7445621167"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 202934249.06666666,
            "unit": "ns",
            "range": "± 2278111.3500310006"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 59147.9693877551,
            "unit": "ns",
            "range": "± 10764.539010680175"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 305865.75531914894,
            "unit": "ns",
            "range": "± 20546.02302669987"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 290688.5,
            "unit": "ns",
            "range": "± 14301.647013395857"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 265174.1014492754,
            "unit": "ns",
            "range": "± 12793.835312534806"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3779419.5,
            "unit": "ns",
            "range": "± 49558.544122078485"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3601235.8636363638,
            "unit": "ns",
            "range": "± 73208.04262692886"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16886.95348837209,
            "unit": "ns",
            "range": "± 2188.8116566757067"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 77532.16129032258,
            "unit": "ns",
            "range": "± 5722.214924026022"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 70432.87777777777,
            "unit": "ns",
            "range": "± 4895.3142026020405"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 82084.53684210527,
            "unit": "ns",
            "range": "± 9146.002557576872"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4990.010869565217,
            "unit": "ns",
            "range": "± 657.8552313199765"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17354.70879120879,
            "unit": "ns",
            "range": "± 1641.6212346774996"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1441747.3541666667,
            "unit": "ns",
            "range": "± 163835.26973877908"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2686583.3586956523,
            "unit": "ns",
            "range": "± 193610.36670271566"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1775963.4893617022,
            "unit": "ns",
            "range": "± 124036.80624819624"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5424755.064935065,
            "unit": "ns",
            "range": "± 275490.34584251756"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3253384.3870967743,
            "unit": "ns",
            "range": "± 147061.37052491852"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3475962.34375,
            "unit": "ns",
            "range": "± 107175.5781174681"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4255385.014492754,
            "unit": "ns",
            "range": "± 200651.57605173174"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3817570.393939394,
            "unit": "ns",
            "range": "± 178880.91860950648"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7045468.491525424,
            "unit": "ns",
            "range": "± 311355.5712699003"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5281869.030691965,
            "unit": "ns",
            "range": "± 38874.170484025475"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1648829.1987680288,
            "unit": "ns",
            "range": "± 8926.427385147708"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 996601.8630022322,
            "unit": "ns",
            "range": "± 6780.324129489306"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2430047.537860577,
            "unit": "ns",
            "range": "± 23803.20886019604"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 771137.0528041294,
            "unit": "ns",
            "range": "± 2822.829410244973"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 790482.5151367188,
            "unit": "ns",
            "range": "± 3642.6704934596955"
          }
        ]
      }
    ]
  }
}