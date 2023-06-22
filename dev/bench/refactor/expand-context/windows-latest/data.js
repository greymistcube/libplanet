window.BENCHMARK_DATA = {
  "lastUpdate": 1687397743580,
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
          "id": "18cc285cffeaed343ba3bc79a86a96bba93fafe2",
          "message": "Added BlockProtocolVersion to IActionContext",
          "timestamp": "2023-06-21T16:41:11+09:00",
          "tree_id": "b2895b8b288da583d37e3a26a24c1fe1c342d8a9",
          "url": "https://github.com/greymistcube/libplanet/commit/18cc285cffeaed343ba3bc79a86a96bba93fafe2"
        },
        "date": 1687334322942,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1375238.7096774194,
            "unit": "ns",
            "range": "± 89723.07157153067"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2656059.340659341,
            "unit": "ns",
            "range": "± 146175.34218117179"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2223030.612244898,
            "unit": "ns",
            "range": "± 151595.25562317693"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5449193.75,
            "unit": "ns",
            "range": "± 283876.0900770001"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47413.68421052631,
            "unit": "ns",
            "range": "± 3088.331179404859"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6929680,
            "unit": "ns",
            "range": "± 157763.178947367"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19489123.333333332,
            "unit": "ns",
            "range": "± 308852.1894893752"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49553660,
            "unit": "ns",
            "range": "± 890291.5508015177"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 100834185.71428572,
            "unit": "ns",
            "range": "± 1309989.8184320382"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 197118920,
            "unit": "ns",
            "range": "± 2384040.2421100195"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4828370.885416667,
            "unit": "ns",
            "range": "± 26423.20212058068"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1522934.7591145833,
            "unit": "ns",
            "range": "± 12137.182934265722"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1168186.021205357,
            "unit": "ns",
            "range": "± 7659.097274646316"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2649495.2008928573,
            "unit": "ns",
            "range": "± 5987.394694421147"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 835818.3035714285,
            "unit": "ns",
            "range": "± 1519.5686144566869"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 769962.6802884615,
            "unit": "ns",
            "range": "± 2495.422766231949"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3119800,
            "unit": "ns",
            "range": "± 131340.84133952236"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3293750,
            "unit": "ns",
            "range": "± 102422.35139126678"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4096908.888888889,
            "unit": "ns",
            "range": "± 155738.6254743712"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4165212.5,
            "unit": "ns",
            "range": "± 146068.3369882495"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6796500,
            "unit": "ns",
            "range": "± 299935.75696319493"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 271987.5,
            "unit": "ns",
            "range": "± 10462.10232727548"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 255912.12121212122,
            "unit": "ns",
            "range": "± 7969.385075703676"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 230887.37373737374,
            "unit": "ns",
            "range": "± 16926.181783469605"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4039858.8235294116,
            "unit": "ns",
            "range": "± 82763.1338430911"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3632685.714285714,
            "unit": "ns",
            "range": "± 85038.89278273963"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20764.94845360825,
            "unit": "ns",
            "range": "± 2808.5450428526083"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 91639.01098901099,
            "unit": "ns",
            "range": "± 7431.830200031491"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 74535.10638297872,
            "unit": "ns",
            "range": "± 4416.968927295052"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 106348.45360824742,
            "unit": "ns",
            "range": "± 16459.86351579997"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5605.263157894737,
            "unit": "ns",
            "range": "± 1052.2891380277563"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18993.548387096773,
            "unit": "ns",
            "range": "± 1661.1158148517611"
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
          "id": "17c4502bc80ff22b8888b337bcc8626659f4e3b9",
          "message": "Changelog",
          "timestamp": "2023-06-21T16:45:58+09:00",
          "tree_id": "3d8097d8dd8bb6549ca37a3070712065570030ec",
          "url": "https://github.com/greymistcube/libplanet/commit/17c4502bc80ff22b8888b337bcc8626659f4e3b9"
        },
        "date": 1687334451752,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1405608.3333333333,
            "unit": "ns",
            "range": "± 95387.32528256258"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2552420.338983051,
            "unit": "ns",
            "range": "± 112016.7887350097"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2265152.0408163266,
            "unit": "ns",
            "range": "± 165809.53253135463"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5190706.097560976,
            "unit": "ns",
            "range": "± 184217.38388216853"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47310.416666666664,
            "unit": "ns",
            "range": "± 4652.344721052898"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6733480,
            "unit": "ns",
            "range": "± 51154.55851772017"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17973284.615384616,
            "unit": "ns",
            "range": "± 64873.10493255077"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46679892.85714286,
            "unit": "ns",
            "range": "± 190348.71830521888"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 92673776.92307693,
            "unit": "ns",
            "range": "± 645708.3412215433"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 186930921.42857143,
            "unit": "ns",
            "range": "± 828564.9894927897"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4875937.786458333,
            "unit": "ns",
            "range": "± 42752.61302115873"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1519280.078125,
            "unit": "ns",
            "range": "± 2003.0975827000566"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1130467.2395833333,
            "unit": "ns",
            "range": "± 2106.6852470346576"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2577566.238839286,
            "unit": "ns",
            "range": "± 18160.19213877895"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 818307.1223958334,
            "unit": "ns",
            "range": "± 7925.575523698333"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 751771.484375,
            "unit": "ns",
            "range": "± 1158.900104100024"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3252992.8571428573,
            "unit": "ns",
            "range": "± 49569.166351142645"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3353973.6842105263,
            "unit": "ns",
            "range": "± 62451.03719541914"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4178777.272727273,
            "unit": "ns",
            "range": "± 101888.9541740614"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4186880.5555555555,
            "unit": "ns",
            "range": "± 138020.8758939737"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6611705.555555556,
            "unit": "ns",
            "range": "± 205275.97444060442"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 263500,
            "unit": "ns",
            "range": "± 10948.834692882867"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 258759.52380952382,
            "unit": "ns",
            "range": "± 8293.18878692128"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 236303,
            "unit": "ns",
            "range": "± 15625.163950654998"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3862076.923076923,
            "unit": "ns",
            "range": "± 31866.49635186758"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3513523.076923077,
            "unit": "ns",
            "range": "± 30910.331440209273"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21285.567010309278,
            "unit": "ns",
            "range": "± 2588.7170926091967"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 88000,
            "unit": "ns",
            "range": "± 9296.247002599132"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 71813.82978723405,
            "unit": "ns",
            "range": "± 6005.814406089611"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 93135.56701030929,
            "unit": "ns",
            "range": "± 13896.709665201339"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4878.723404255319,
            "unit": "ns",
            "range": "± 1110.446228278508"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20331.720430107525,
            "unit": "ns",
            "range": "± 1644.3543887415894"
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
          "id": "ecf12871100dbeca1217b83a64fb5a4f1850f030",
          "message": "Added missing link",
          "timestamp": "2023-06-22T10:12:31+09:00",
          "tree_id": "cc4ee720cc3a85be1878462c62027f2a0313d781",
          "url": "https://github.com/greymistcube/libplanet/commit/ecf12871100dbeca1217b83a64fb5a4f1850f030"
        },
        "date": 1687397715291,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1822087.6288659794,
            "unit": "ns",
            "range": "± 244503.64101657228"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3314451.052631579,
            "unit": "ns",
            "range": "± 298660.51049778087"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2664418.947368421,
            "unit": "ns",
            "range": "± 282838.0599350384"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6652103.157894737,
            "unit": "ns",
            "range": "± 684415.9047937173"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 60110.52631578947,
            "unit": "ns",
            "range": "± 13166.507103044181"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8574005.263157895,
            "unit": "ns",
            "range": "± 548317.4126106197"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24161797.872340426,
            "unit": "ns",
            "range": "± 1541587.4483322832"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 62900094.366197184,
            "unit": "ns",
            "range": "± 2999041.142807734"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 127024139.02439025,
            "unit": "ns",
            "range": "± 4508838.197189939"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 249684434.4827586,
            "unit": "ns",
            "range": "± 7300351.522812146"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5984081.919642857,
            "unit": "ns",
            "range": "± 71220.58601460309"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1933541.3707386365,
            "unit": "ns",
            "range": "± 40868.925039506685"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1477886.5234375,
            "unit": "ns",
            "range": "± 25684.61952360283"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3189826.6145833335,
            "unit": "ns",
            "range": "± 45814.08164419964"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1053983.9329769737,
            "unit": "ns",
            "range": "± 22459.545678480434"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 967392.1247209822,
            "unit": "ns",
            "range": "± 12118.56007756402"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3684130.5263157897,
            "unit": "ns",
            "range": "± 322865.24429415487"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4001684.375,
            "unit": "ns",
            "range": "± 354350.226197079"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5174707.44680851,
            "unit": "ns",
            "range": "± 395942.0926052658"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4785259.793814433,
            "unit": "ns",
            "range": "± 335338.77853218385"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8564807.446808511,
            "unit": "ns",
            "range": "± 515752.511132663"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 310527.9569892473,
            "unit": "ns",
            "range": "± 30368.015803213366"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 298744.3298969072,
            "unit": "ns",
            "range": "± 36625.221754368955"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 275986.170212766,
            "unit": "ns",
            "range": "± 40846.685816162186"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4683847.916666667,
            "unit": "ns",
            "range": "± 375654.39435152896"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4289136.170212766,
            "unit": "ns",
            "range": "± 367445.16051987413"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24814.141414141413,
            "unit": "ns",
            "range": "± 10415.647668155108"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 98574.22680412371,
            "unit": "ns",
            "range": "± 17730.395736973573"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 98192.85714285714,
            "unit": "ns",
            "range": "± 23254.71352287376"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 123960.41666666667,
            "unit": "ns",
            "range": "± 28592.407822492303"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6375.824175824176,
            "unit": "ns",
            "range": "± 1435.528602551119"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17586.585365853658,
            "unit": "ns",
            "range": "± 3113.2338867106414"
          }
        ]
      }
    ]
  }
}