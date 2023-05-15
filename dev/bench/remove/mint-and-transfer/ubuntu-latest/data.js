window.BENCHMARK_DATA = {
  "lastUpdate": 1684136069498,
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
          "id": "5ecc71293242deb62556f50c242468610031664f",
          "message": "Removed Mint and Transfer actions",
          "timestamp": "2023-05-15T15:46:20+09:00",
          "tree_id": "a2f130184a564a1228584bf58e9d0d9af6197c4f",
          "url": "https://github.com/greymistcube/libplanet/commit/5ecc71293242deb62556f50c242468610031664f"
        },
        "date": 1684133957279,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3351989.1333333333,
            "unit": "ns",
            "range": "± 54263.13519438228"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3542476.25,
            "unit": "ns",
            "range": "± 80427.18210568195"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4388279.3,
            "unit": "ns",
            "range": "± 66501.2641997987"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4090825.080645161,
            "unit": "ns",
            "range": "± 179821.1391943598"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6898740.62962963,
            "unit": "ns",
            "range": "± 161679.98603845813"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 276639.45454545453,
            "unit": "ns",
            "range": "± 10926.633349922398"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 263054.5833333333,
            "unit": "ns",
            "range": "± 11134.488293999371"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 248177.47422680413,
            "unit": "ns",
            "range": "± 14982.723499426475"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4297205.714285715,
            "unit": "ns",
            "range": "± 32218.688729533198"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3905853.8571428573,
            "unit": "ns",
            "range": "± 47407.51530953901"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20726.4,
            "unit": "ns",
            "range": "± 2369.73559167855"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 95306.0505050505,
            "unit": "ns",
            "range": "± 7414.886725398064"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 73858.2,
            "unit": "ns",
            "range": "± 4748.24585885885"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 81889.19587628866,
            "unit": "ns",
            "range": "± 11494.990271707475"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4571.61052631579,
            "unit": "ns",
            "range": "± 588.7024732542556"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19363.01030927835,
            "unit": "ns",
            "range": "± 1763.376534372606"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5864110.656770834,
            "unit": "ns",
            "range": "± 18491.75492364454"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1838933.721905048,
            "unit": "ns",
            "range": "± 1416.3548716622436"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1354634.7925502232,
            "unit": "ns",
            "range": "± 855.8327365514812"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2592756.5479166666,
            "unit": "ns",
            "range": "± 4017.6385214145366"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 802650.0201822916,
            "unit": "ns",
            "range": "± 706.0998872484068"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 742263.265234375,
            "unit": "ns",
            "range": "± 806.3850322132697"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7506865.066666666,
            "unit": "ns",
            "range": "± 25177.97881501857"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19799814.14285714,
            "unit": "ns",
            "range": "± 101458.86955567996"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50655436.266666666,
            "unit": "ns",
            "range": "± 347125.14170509303"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 101503517,
            "unit": "ns",
            "range": "± 353350.42105144117"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 201931589.53333333,
            "unit": "ns",
            "range": "± 1657608.6831435761"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1414410.5408163266,
            "unit": "ns",
            "range": "± 112407.08306929683"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2632446.1666666665,
            "unit": "ns",
            "range": "± 85812.84164922104"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2225079.466666667,
            "unit": "ns",
            "range": "± 119660.49474168457"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5419544.444444444,
            "unit": "ns",
            "range": "± 180788.1911354428"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 45752.95698924731,
            "unit": "ns",
            "range": "± 2869.272010056764"
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
          "id": "445e4d68e25d8322a38c01e059769dce027b0ead",
          "message": "Changelog",
          "timestamp": "2023-05-15T15:47:51+09:00",
          "tree_id": "93e901805fd0f4bf5d6425385e28af3603dccc18",
          "url": "https://github.com/greymistcube/libplanet/commit/445e4d68e25d8322a38c01e059769dce027b0ead"
        },
        "date": 1684133980639,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3252634,
            "unit": "ns",
            "range": "± 63888.63818848346"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3451324,
            "unit": "ns",
            "range": "± 49643.954051285575"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4259300.846153846,
            "unit": "ns",
            "range": "± 36449.24729640324"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4226199,
            "unit": "ns",
            "range": "± 77612.40202349842"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6691773.0869565215,
            "unit": "ns",
            "range": "± 144010.28758419657"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 279416.89285714284,
            "unit": "ns",
            "range": "± 7166.5455717897785"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 269203.6590909091,
            "unit": "ns",
            "range": "± 8206.700679558682"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 231609.57894736843,
            "unit": "ns",
            "range": "± 4958.238232318114"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4155986.2,
            "unit": "ns",
            "range": "± 24426.89618666862"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3845865.8571428573,
            "unit": "ns",
            "range": "± 38914.88952307852"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15439.08695652174,
            "unit": "ns",
            "range": "± 1007.0032099665536"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 75216.92857142857,
            "unit": "ns",
            "range": "± 3481.954420871548"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 68325.77777777778,
            "unit": "ns",
            "range": "± 1900.2900858175337"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 78001.85567010309,
            "unit": "ns",
            "range": "± 10897.424813334812"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3796.8541666666665,
            "unit": "ns",
            "range": "± 397.73903052568124"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13488.730337078652,
            "unit": "ns",
            "range": "± 757.9105512712528"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6054594.525,
            "unit": "ns",
            "range": "± 24440.108943833606"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1836132.0740792411,
            "unit": "ns",
            "range": "± 6719.0274530671795"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1369087.977734375,
            "unit": "ns",
            "range": "± 3768.9280787872285"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2546717.57421875,
            "unit": "ns",
            "range": "± 4495.844360752374"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 815569.689313616,
            "unit": "ns",
            "range": "± 822.772520816201"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 724420.1187220982,
            "unit": "ns",
            "range": "± 1479.0868520884312"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7453414.533333333,
            "unit": "ns",
            "range": "± 14426.598856015265"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19105121.333333332,
            "unit": "ns",
            "range": "± 78816.83703523058"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49290109.78571428,
            "unit": "ns",
            "range": "± 291758.57502583263"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 98810013.28571428,
            "unit": "ns",
            "range": "± 399789.0581672037"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 198070937.7857143,
            "unit": "ns",
            "range": "± 857142.4056864027"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1374735.255319149,
            "unit": "ns",
            "range": "± 100032.76406805623"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2566935.35,
            "unit": "ns",
            "range": "± 57401.92096297364"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2125518.56,
            "unit": "ns",
            "range": "± 100257.41249919384"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5244731.862068965,
            "unit": "ns",
            "range": "± 151161.7078088713"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 44067.69047619047,
            "unit": "ns",
            "range": "± 2370.8153392704908"
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2b86de079d57c6e713ce2bea88d33ea6f1cd45fd",
          "message": "Merge pull request #3157 from greymistcube/remove/native-tokens\n\n🧹 Remove remaining native tokens related API",
          "timestamp": "2023-05-12T20:36:42+09:00",
          "tree_id": "bed97323e9fdde44e5164e36835e6bcc173687b6",
          "url": "https://github.com/greymistcube/libplanet/commit/2b86de079d57c6e713ce2bea88d33ea6f1cd45fd"
        },
        "date": 1684134213590,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4160222.325,
            "unit": "ns",
            "range": "± 144571.7204639874"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4392520.985074627,
            "unit": "ns",
            "range": "± 205620.4866157695"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5272188.729166667,
            "unit": "ns",
            "range": "± 200246.34421862758"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5306014.942028985,
            "unit": "ns",
            "range": "± 227886.4856622625"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8725021.520833334,
            "unit": "ns",
            "range": "± 319445.4772864464"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 345190.6307692308,
            "unit": "ns",
            "range": "± 15961.380394926326"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 340997.70967741933,
            "unit": "ns",
            "range": "± 20433.143027178772"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 314480.4946236559,
            "unit": "ns",
            "range": "± 19026.46704371917"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5240404.923076923,
            "unit": "ns",
            "range": "± 79130.44332668005"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4925774.15625,
            "unit": "ns",
            "range": "± 226801.3673047597"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20355.061224489797,
            "unit": "ns",
            "range": "± 3456.221782021836"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 100508.4255319149,
            "unit": "ns",
            "range": "± 9649.244850379067"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 111530.04040404041,
            "unit": "ns",
            "range": "± 17243.54961795634"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 119074.65263157895,
            "unit": "ns",
            "range": "± 15931.827228731068"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 11312,
            "unit": "ns",
            "range": "± 5635.758488204914"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19308.695652173912,
            "unit": "ns",
            "range": "± 2904.1331733879033"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6991012.730823863,
            "unit": "ns",
            "range": "± 261419.3687503431"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2223678.867598684,
            "unit": "ns",
            "range": "± 46625.090644420554"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1555912.525669643,
            "unit": "ns",
            "range": "± 56420.92414641587"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2891732.208251953,
            "unit": "ns",
            "range": "± 56622.70674860906"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 948076.8706359863,
            "unit": "ns",
            "range": "± 27853.45063867076"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 840961.8690755208,
            "unit": "ns",
            "range": "± 13648.438515918311"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10182688.909090908,
            "unit": "ns",
            "range": "± 315616.3297367909"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25637628.64285714,
            "unit": "ns",
            "range": "± 368413.0028298315"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 64136316.25,
            "unit": "ns",
            "range": "± 2122780.117988623"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 127225497.05263157,
            "unit": "ns",
            "range": "± 6419750.606512571"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 261263355.2222222,
            "unit": "ns",
            "range": "± 4840390.534149268"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1518507.0102040817,
            "unit": "ns",
            "range": "± 180736.28420667208"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2926329.0520833335,
            "unit": "ns",
            "range": "± 192567.7777727744"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2318179.0736842104,
            "unit": "ns",
            "range": "± 174121.28937820485"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6589029.084210526,
            "unit": "ns",
            "range": "± 694253.3870810913"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 66003.08333333333,
            "unit": "ns",
            "range": "± 9575.783762526527"
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
          "id": "3e70352d4c200566dc78185e4e0d1be970ef06b4",
          "message": "Fixed tests",
          "timestamp": "2023-05-15T16:00:01+09:00",
          "tree_id": "716e5769da49fa706ed7301338cf25118542a229",
          "url": "https://github.com/greymistcube/libplanet/commit/3e70352d4c200566dc78185e4e0d1be970ef06b4"
        },
        "date": 1684135132230,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3783802.0319148935,
            "unit": "ns",
            "range": "± 288128.9269090344"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4092936.6021505375,
            "unit": "ns",
            "range": "± 411707.0554594227"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5154322.133333334,
            "unit": "ns",
            "range": "± 442547.90496032016"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5080557.875,
            "unit": "ns",
            "range": "± 345054.7330436315"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9268262.409090908,
            "unit": "ns",
            "range": "± 735028.435285965"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 352689.10204081633,
            "unit": "ns",
            "range": "± 13841.782520453695"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 347241.05376344087,
            "unit": "ns",
            "range": "± 24496.119662707533"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 321614.59550561797,
            "unit": "ns",
            "range": "± 25140.64369597886"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5051820.988764045,
            "unit": "ns",
            "range": "± 339722.0883328585"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4643407.348314607,
            "unit": "ns",
            "range": "± 297246.75235044817"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24379.663265306124,
            "unit": "ns",
            "range": "± 6216.608512758762"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 104597.23711340207,
            "unit": "ns",
            "range": "± 12165.788734683072"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 106490.09183673469,
            "unit": "ns",
            "range": "± 18220.968890285647"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 120432.60416666667,
            "unit": "ns",
            "range": "± 19621.479685326147"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 11841.03,
            "unit": "ns",
            "range": "± 6214.10074343794"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23721.242424242424,
            "unit": "ns",
            "range": "± 6738.698271150773"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7224051.436298077,
            "unit": "ns",
            "range": "± 196593.91869064467"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2275378.0083133015,
            "unit": "ns",
            "range": "± 79532.77921295787"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1629004.4755434783,
            "unit": "ns",
            "range": "± 35623.750416479"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3120058.3282752405,
            "unit": "ns",
            "range": "± 83270.85818812746"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1034095.830453726,
            "unit": "ns",
            "range": "± 28003.18587904766"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 929918.7354492188,
            "unit": "ns",
            "range": "± 32882.44039042692"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9359971.314606741,
            "unit": "ns",
            "range": "± 714592.1026394357"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25002825.350515462,
            "unit": "ns",
            "range": "± 1829212.5140246428"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 63640967.46391752,
            "unit": "ns",
            "range": "± 4107934.261158962"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 128759983.99,
            "unit": "ns",
            "range": "± 8192018.964032752"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 251638945.65625,
            "unit": "ns",
            "range": "± 11493349.364806606"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1677378.6210526316,
            "unit": "ns",
            "range": "± 160586.27997177726"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3089518.811111111,
            "unit": "ns",
            "range": "± 261000.68841460266"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2606024.1157894735,
            "unit": "ns",
            "range": "± 232938.35701742172"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7199008.083333333,
            "unit": "ns",
            "range": "± 788407.6119657859"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 63270.891304347824,
            "unit": "ns",
            "range": "± 9507.090511195074"
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
          "id": "a88aac2b83adf3adcb80789dc06b3f49a1f01c0d",
          "message": "Fixed tests",
          "timestamp": "2023-05-15T16:21:24+09:00",
          "tree_id": "b6b650bf75ad17981e2add73f039d9804435035e",
          "url": "https://github.com/greymistcube/libplanet/commit/a88aac2b83adf3adcb80789dc06b3f49a1f01c0d"
        },
        "date": 1684136062512,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3372818,
            "unit": "ns",
            "range": "± 72850.02110576983"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3593935.714285714,
            "unit": "ns",
            "range": "± 45624.22821505894"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4353036.4,
            "unit": "ns",
            "range": "± 78246.18838621744"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4413372.7894736845,
            "unit": "ns",
            "range": "± 151484.893671472"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6891698.259259259,
            "unit": "ns",
            "range": "± 192491.41315385647"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 284477.08,
            "unit": "ns",
            "range": "± 11100.066566889938"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 269854.70967741933,
            "unit": "ns",
            "range": "± 7482.5180975103485"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 238180.95652173914,
            "unit": "ns",
            "range": "± 5825.6011432161995"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4296655.25,
            "unit": "ns",
            "range": "± 42962.78367933429"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3954056,
            "unit": "ns",
            "range": "± 71470.51613677588"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18402.273684210526,
            "unit": "ns",
            "range": "± 1284.20902423131"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 90327.83333333333,
            "unit": "ns",
            "range": "± 4668.408951740694"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 75380.22448979592,
            "unit": "ns",
            "range": "± 2987.699325744547"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 96221.42857142857,
            "unit": "ns",
            "range": "± 14943.205024771998"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5906.224489795918,
            "unit": "ns",
            "range": "± 796.1104742616557"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19128.532608695652,
            "unit": "ns",
            "range": "± 1157.1095425371284"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5919386.315290178,
            "unit": "ns",
            "range": "± 27297.082429314163"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1865552.9033854166,
            "unit": "ns",
            "range": "± 3900.7688731196868"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1369208.5416666667,
            "unit": "ns",
            "range": "± 4197.037859197545"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2605179.634895833,
            "unit": "ns",
            "range": "± 5784.462973221003"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 843373.6480189732,
            "unit": "ns",
            "range": "± 757.0429067605878"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 764464.154157366,
            "unit": "ns",
            "range": "± 688.9240645515813"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7855983.866666666,
            "unit": "ns",
            "range": "± 137263.7133996697"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21501656.4,
            "unit": "ns",
            "range": "± 276556.40389124444"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54171197.2,
            "unit": "ns",
            "range": "± 765067.2775408336"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 108422305.26666667,
            "unit": "ns",
            "range": "± 1227826.1696599906"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 213751910.86666667,
            "unit": "ns",
            "range": "± 2648596.582102083"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1479930.3157894737,
            "unit": "ns",
            "range": "± 83452.07370882687"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2905155.8387096776,
            "unit": "ns",
            "range": "± 86566.0754437891"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2362272.435897436,
            "unit": "ns",
            "range": "± 120401.43790535748"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5641101.612903226,
            "unit": "ns",
            "range": "± 170811.4415983655"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 50716.23684210526,
            "unit": "ns",
            "range": "± 2580.6128567631426"
          }
        ]
      }
    ]
  }
}