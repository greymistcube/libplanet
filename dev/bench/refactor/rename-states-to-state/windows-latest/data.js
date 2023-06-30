window.BENCHMARK_DATA = {
  "lastUpdate": 1688120662916,
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
          "id": "a6356333b6ce3987cecdc61838d8428a69efb910",
          "message": "General name changes",
          "timestamp": "2023-06-30T18:14:22+09:00",
          "tree_id": "9dd1f5bc211451c44be06e9a7b92b29245266c77",
          "url": "https://github.com/greymistcube/libplanet/commit/a6356333b6ce3987cecdc61838d8428a69efb910"
        },
        "date": 1688117621594,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1719566.3265306123,
            "unit": "ns",
            "range": "± 147271.23580538345"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3217377.0833333335,
            "unit": "ns",
            "range": "± 266496.90251154074"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2168493.8775510206,
            "unit": "ns",
            "range": "± 171399.1854906885"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6367380.412371134,
            "unit": "ns",
            "range": "± 417336.49808417365"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 58282.608695652176,
            "unit": "ns",
            "range": "± 9195.562817876127"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9042082.051282052,
            "unit": "ns",
            "range": "± 315298.691195136"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25168836.363636363,
            "unit": "ns",
            "range": "± 606898.1137880398"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 64665320,
            "unit": "ns",
            "range": "± 1900973.352930473"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 131208850,
            "unit": "ns",
            "range": "± 2409738.37639414"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 259944440,
            "unit": "ns",
            "range": "± 4248669.466987787"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6072185.208333333,
            "unit": "ns",
            "range": "± 60339.43987953334"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1939907.2786458333,
            "unit": "ns",
            "range": "± 29541.81615212435"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1548879.0211397058,
            "unit": "ns",
            "range": "± 30367.83336819605"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3248680,
            "unit": "ns",
            "range": "± 32132.404448276444"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1051998.8541666667,
            "unit": "ns",
            "range": "± 10255.508741401074"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 976989.9489182692,
            "unit": "ns",
            "range": "± 6300.230734306275"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3718780,
            "unit": "ns",
            "range": "± 187549.81176181408"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4034630.1886792453,
            "unit": "ns",
            "range": "± 167320.5164496085"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5205563.3802816905,
            "unit": "ns",
            "range": "± 251973.66089076884"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4550246.464646464,
            "unit": "ns",
            "range": "± 278926.2635035784"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7948917.857142857,
            "unit": "ns",
            "range": "± 226630.60015931525"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 323486.0215053763,
            "unit": "ns",
            "range": "± 34099.3484299533"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 302554.94505494507,
            "unit": "ns",
            "range": "± 23488.34824019141"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 275093.47826086957,
            "unit": "ns",
            "range": "± 26528.08921575549"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5010819.047619048,
            "unit": "ns",
            "range": "± 268728.107531377"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4529078.125,
            "unit": "ns",
            "range": "± 260063.12480793663"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20168.235294117647,
            "unit": "ns",
            "range": "± 2897.38025204321"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 97982.29166666667,
            "unit": "ns",
            "range": "± 14181.403648081685"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 105226.80412371134,
            "unit": "ns",
            "range": "± 21703.674398320578"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 124209.1836734694,
            "unit": "ns",
            "range": "± 22880.190354692142"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6222.826086956522,
            "unit": "ns",
            "range": "± 1230.2151389505825"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18439.772727272728,
            "unit": "ns",
            "range": "± 2152.2263144643816"
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
          "id": "1dc7b9a95bf9b254acb5433565384466ede62306",
          "message": "Changelog",
          "timestamp": "2023-06-30T18:18:08+09:00",
          "tree_id": "e0c2208a1d284ce2e66f7cb6f595fa3636823780",
          "url": "https://github.com/greymistcube/libplanet/commit/1dc7b9a95bf9b254acb5433565384466ede62306"
        },
        "date": 1688117655236,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1413683.6734693877,
            "unit": "ns",
            "range": "± 176329.17126191256"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2529785.5555555555,
            "unit": "ns",
            "range": "± 140595.49240869333"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1816594.9494949495,
            "unit": "ns",
            "range": "± 142176.91578591577"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4705500,
            "unit": "ns",
            "range": "± 201770.20433439338"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47537.5,
            "unit": "ns",
            "range": "± 11666.192722202859"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8099778.260869565,
            "unit": "ns",
            "range": "± 200316.7422688418"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19061992,
            "unit": "ns",
            "range": "± 959467.0958627207"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 45530020.833333336,
            "unit": "ns",
            "range": "± 836337.2052297143"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 90733971.42857143,
            "unit": "ns",
            "range": "± 947061.6034130729"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 190918943.33333334,
            "unit": "ns",
            "range": "± 5237966.297417831"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5100582.734375,
            "unit": "ns",
            "range": "± 39977.91004662113"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1553673.6848958333,
            "unit": "ns",
            "range": "± 7247.3187820706435"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1085107.1484375,
            "unit": "ns",
            "range": "± 6901.308929810054"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2639067.8125,
            "unit": "ns",
            "range": "± 13534.958686038817"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 859916.6666666666,
            "unit": "ns",
            "range": "± 4572.144154325057"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 766080.5924479166,
            "unit": "ns",
            "range": "± 5619.791986229163"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3096020,
            "unit": "ns",
            "range": "± 229918.51652797396"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3183811.0169491526,
            "unit": "ns",
            "range": "± 140390.52062623957"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4213225.5813953485,
            "unit": "ns",
            "range": "± 153747.21537241896"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3774975,
            "unit": "ns",
            "range": "± 196969.87786159114"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6171672.7272727275,
            "unit": "ns",
            "range": "± 214771.55669334345"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 259725.77319587627,
            "unit": "ns",
            "range": "± 27073.365903097907"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 262626.2626262626,
            "unit": "ns",
            "range": "± 36351.98836843024"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 191823.15789473685,
            "unit": "ns",
            "range": "± 30063.02759569443"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4055679.7297297297,
            "unit": "ns",
            "range": "± 203206.62537719143"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3589433.3333333335,
            "unit": "ns",
            "range": "± 145305.57823657928"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19667.708333333332,
            "unit": "ns",
            "range": "± 6325.312470611802"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 79759.78260869565,
            "unit": "ns",
            "range": "± 17980.8204275813"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 57829.78723404255,
            "unit": "ns",
            "range": "± 15906.11453259835"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 119976.04166666667,
            "unit": "ns",
            "range": "± 19793.687163716815"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5329.896907216495,
            "unit": "ns",
            "range": "± 2626.9899183148445"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23796.969696969696,
            "unit": "ns",
            "range": "± 6966.984159202788"
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
          "id": "c82a74dc369847e7d30ae0837cfe40ae1cda7629",
          "message": "Changelog",
          "timestamp": "2023-06-30T18:19:04+09:00",
          "tree_id": "df6e9073954b05dadad6934cdb9be172c8db348d",
          "url": "https://github.com/greymistcube/libplanet/commit/c82a74dc369847e7d30ae0837cfe40ae1cda7629"
        },
        "date": 1688117662865,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1268263.043478261,
            "unit": "ns",
            "range": "± 71290.55347527663"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2495265.5172413792,
            "unit": "ns",
            "range": "± 107080.13485846343"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1735248.9130434783,
            "unit": "ns",
            "range": "± 98368.54171332184"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4740679.487179487,
            "unit": "ns",
            "range": "± 159449.14744451514"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 44451.57894736842,
            "unit": "ns",
            "range": "± 2764.973285157956"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7217100,
            "unit": "ns",
            "range": "± 111210.63175517265"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20068556,
            "unit": "ns",
            "range": "± 515362.1890476638"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50901423.07692308,
            "unit": "ns",
            "range": "± 659585.9789214319"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 98777700,
            "unit": "ns",
            "range": "± 1836569.685193412"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 194499010.52631578,
            "unit": "ns",
            "range": "± 4268807.946396321"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4816805.338541667,
            "unit": "ns",
            "range": "± 29880.413246451135"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1543041.9140625,
            "unit": "ns",
            "range": "± 7959.790695010063"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1190795.7421875,
            "unit": "ns",
            "range": "± 4345.023487936259"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2634636.3802083335,
            "unit": "ns",
            "range": "± 10692.103807431007"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 843263.84765625,
            "unit": "ns",
            "range": "± 2922.539285216038"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 784938.1640625,
            "unit": "ns",
            "range": "± 2995.4883301698605"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3060842.8571428573,
            "unit": "ns",
            "range": "± 52901.36997332815"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3241094,
            "unit": "ns",
            "range": "± 130648.68206962752"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4219346.153846154,
            "unit": "ns",
            "range": "± 114904.65345065614"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3616981.25,
            "unit": "ns",
            "range": "± 69876.3023134453"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5995858.823529412,
            "unit": "ns",
            "range": "± 189712.4875965974"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 259500,
            "unit": "ns",
            "range": "± 10801.708038626304"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 244390.625,
            "unit": "ns",
            "range": "± 7242.498204482724"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 217445,
            "unit": "ns",
            "range": "± 4644.461897334229"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4027014.285714286,
            "unit": "ns",
            "range": "± 71173.69714181754"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3679969.230769231,
            "unit": "ns",
            "range": "± 47855.90149283898"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17632.98969072165,
            "unit": "ns",
            "range": "± 1751.7087877201352"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 81617.04545454546,
            "unit": "ns",
            "range": "± 4482.3336899716605"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 70475,
            "unit": "ns",
            "range": "± 2496.022476887619"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 82432.46753246753,
            "unit": "ns",
            "range": "± 3667.4758836950273"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5028.125,
            "unit": "ns",
            "range": "± 698.0730055321088"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17050.526315789473,
            "unit": "ns",
            "range": "± 1542.4402939726142"
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
          "id": "e54abd15c3f660352fdde264eb0a29229b603d34",
          "message": "More renaming",
          "timestamp": "2023-06-30T19:05:43+09:00",
          "tree_id": "78ddfed628b48c2bdd2dbcc2b44146683bc54cbf",
          "url": "https://github.com/greymistcube/libplanet/commit/e54abd15c3f660352fdde264eb0a29229b603d34"
        },
        "date": 1688120388834,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1335088.888888889,
            "unit": "ns",
            "range": "± 110336.96337822764"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2448289.189189189,
            "unit": "ns",
            "range": "± 79339.75738620645"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1699183,
            "unit": "ns",
            "range": "± 110615.69751334409"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4586976.7441860465,
            "unit": "ns",
            "range": "± 152449.5495584551"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 43570,
            "unit": "ns",
            "range": "± 1828.8924128081233"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6925820,
            "unit": "ns",
            "range": "± 63796.90095473738"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17734800,
            "unit": "ns",
            "range": "± 97132.75157520983"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46058253.333333336,
            "unit": "ns",
            "range": "± 351307.56948997325"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 90658128.57142857,
            "unit": "ns",
            "range": "± 473941.8565094756"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 183314626.66666666,
            "unit": "ns",
            "range": "± 901141.2173038194"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4928839.285714285,
            "unit": "ns",
            "range": "± 10662.953389503296"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1519694.1080729167,
            "unit": "ns",
            "range": "± 1664.8093874156912"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1154155.1953125,
            "unit": "ns",
            "range": "± 1929.6262418997321"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2555540.1171875,
            "unit": "ns",
            "range": "± 11606.224920294298"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 806257.5055803572,
            "unit": "ns",
            "range": "± 4430.855841153673"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 762498.1575520834,
            "unit": "ns",
            "range": "± 882.45626280738"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3049346.875,
            "unit": "ns",
            "range": "± 94127.25766259551"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3216073.3333333335,
            "unit": "ns",
            "range": "± 55255.59398528503"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4036404.5454545454,
            "unit": "ns",
            "range": "± 97248.45807210826"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3510838.888888889,
            "unit": "ns",
            "range": "± 105846.18294697472"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5870500,
            "unit": "ns",
            "range": "± 166786.01747448734"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 257038.09523809524,
            "unit": "ns",
            "range": "± 8461.70577224677"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 247129.16666666666,
            "unit": "ns",
            "range": "± 9589.310501100943"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 219678.431372549,
            "unit": "ns",
            "range": "± 8475.194716948756"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3866133.3333333335,
            "unit": "ns",
            "range": "± 27770.942333583822"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3451823.3333333335,
            "unit": "ns",
            "range": "± 36929.84597597889"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17475.78947368421,
            "unit": "ns",
            "range": "± 2011.547292110891"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 82188.17204301075,
            "unit": "ns",
            "range": "± 5141.008390814715"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 69046.42857142857,
            "unit": "ns",
            "range": "± 2863.1174545312597"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 85578.57142857143,
            "unit": "ns",
            "range": "± 13732.35512647367"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4230.7692307692305,
            "unit": "ns",
            "range": "± 533.8939361359476"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16748.42105263158,
            "unit": "ns",
            "range": "± 1475.823834690792"
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
          "id": "9bb754e5729ebb5190de9b8e4bf0353bc4df18d3",
          "message": "Changelog addendum",
          "timestamp": "2023-06-30T19:10:15+09:00",
          "tree_id": "53485642bf4470d33e7724d1883cc0890f99acd4",
          "url": "https://github.com/greymistcube/libplanet/commit/9bb754e5729ebb5190de9b8e4bf0353bc4df18d3"
        },
        "date": 1688120642780,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1386327.2727272727,
            "unit": "ns",
            "range": "± 95475.89696708671"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2485951.1627906975,
            "unit": "ns",
            "range": "± 90801.29108609328"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1770402.105263158,
            "unit": "ns",
            "range": "± 110437.2662770804"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4775677.173913044,
            "unit": "ns",
            "range": "± 266909.72590172966"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 45910.98901098901,
            "unit": "ns",
            "range": "± 2564.1741381951833"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7034866.666666667,
            "unit": "ns",
            "range": "± 70311.79200701755"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18298778.57142857,
            "unit": "ns",
            "range": "± 93915.48720133297"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46583720,
            "unit": "ns",
            "range": "± 208778.26994206078"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 93027700,
            "unit": "ns",
            "range": "± 382416.56824288704"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 185220513.33333334,
            "unit": "ns",
            "range": "± 431466.5818323538"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4905726.674107143,
            "unit": "ns",
            "range": "± 17738.41382658841"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1532533.998325893,
            "unit": "ns",
            "range": "± 3528.4433577403647"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1126345.3951322115,
            "unit": "ns",
            "range": "± 1430.9542720212767"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2636868.3203125,
            "unit": "ns",
            "range": "± 34998.22840751145"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 827334.0959821428,
            "unit": "ns",
            "range": "± 1108.142273098694"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 755745.2073317308,
            "unit": "ns",
            "range": "± 951.7731118407839"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3126516.129032258,
            "unit": "ns",
            "range": "± 95126.97162835994"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3391726.3157894737,
            "unit": "ns",
            "range": "± 72849.40968345638"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4152303.125,
            "unit": "ns",
            "range": "± 128986.77847817357"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3631325,
            "unit": "ns",
            "range": "± 95338.12196597959"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6025264.634146341,
            "unit": "ns",
            "range": "± 109572.18525012545"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 268080,
            "unit": "ns",
            "range": "± 12982.067899857933"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 256807.5,
            "unit": "ns",
            "range": "± 9074.715154108428"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 231445,
            "unit": "ns",
            "range": "± 15053.308472212875"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4007342.8571428573,
            "unit": "ns",
            "range": "± 34214.7227483616"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3584764.285714286,
            "unit": "ns",
            "range": "± 25104.75306338675"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20024.74226804124,
            "unit": "ns",
            "range": "± 2237.513078538828"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 93672.1649484536,
            "unit": "ns",
            "range": "± 7786.750796866983"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 70050,
            "unit": "ns",
            "range": "± 3686.088712985622"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 88969.66292134831,
            "unit": "ns",
            "range": "± 9125.518721176422"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4651.546391752578,
            "unit": "ns",
            "range": "± 732.7336660953647"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17487.23404255319,
            "unit": "ns",
            "range": "± 1962.0175068850092"
          }
        ]
      }
    ]
  }
}