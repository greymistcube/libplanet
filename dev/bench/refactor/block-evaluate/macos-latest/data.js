window.BENCHMARK_DATA = {
  "lastUpdate": 1680477964146,
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
          "id": "70bbfb2f984e84ee4571d9e3a68ad6a3cb0c3fc0",
          "message": "Removed unnecessary code",
          "timestamp": "2023-03-31T21:50:08+09:00",
          "tree_id": "7fe50a118abcde3a3dc3a20aa6b369c7ce345b0a",
          "url": "https://github.com/greymistcube/libplanet/commit/70bbfb2f984e84ee4571d9e3a68ad6a3cb0c3fc0"
        },
        "date": 1680268359841,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9311440.247474747,
            "unit": "ns",
            "range": "± 1305760.8743592899"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23209328.4,
            "unit": "ns",
            "range": "± 3385193.4987562164"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 63817612.29591837,
            "unit": "ns",
            "range": "± 8923037.596463293"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 120214204.58163266,
            "unit": "ns",
            "range": "± 9259015.431789897"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 265281812.80645162,
            "unit": "ns",
            "range": "± 35760787.26708891"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 83260.78947368421,
            "unit": "ns",
            "range": "± 18310.251178247836"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 387052.9459459459,
            "unit": "ns",
            "range": "± 19360.356816409192"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 324875.24418604653,
            "unit": "ns",
            "range": "± 27292.352522891633"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 320300.402173913,
            "unit": "ns",
            "range": "± 29675.356335311084"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5925817.927083333,
            "unit": "ns",
            "range": "± 564617.2462938288"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 5631818.696969697,
            "unit": "ns",
            "range": "± 1378634.213738117"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22057.236842105263,
            "unit": "ns",
            "range": "± 4082.0657844171337"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 110221.52173913043,
            "unit": "ns",
            "range": "± 21147.553587490587"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 107939.85416666667,
            "unit": "ns",
            "range": "± 13934.12822116159"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 284143.9680851064,
            "unit": "ns",
            "range": "± 35623.616417185316"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8597.357142857143,
            "unit": "ns",
            "range": "± 2232.2777385580525"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20804.895833333332,
            "unit": "ns",
            "range": "± 3473.63466696793"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1667518.9139784947,
            "unit": "ns",
            "range": "± 216596.73480540302"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3234739.3595505618,
            "unit": "ns",
            "range": "± 315717.70717749535"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2826099.2916666665,
            "unit": "ns",
            "range": "± 454092.2342405761"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7422110.361702127,
            "unit": "ns",
            "range": "± 589691.7616432562"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3835194.6515151514,
            "unit": "ns",
            "range": "± 724578.8755809476"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3996623.2078651683,
            "unit": "ns",
            "range": "± 822666.1706709694"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4918003.988888889,
            "unit": "ns",
            "range": "± 704135.2966125716"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4919766.21978022,
            "unit": "ns",
            "range": "± 473112.9454301301"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9392305.150537634,
            "unit": "ns",
            "range": "± 694443.5825619979"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6884885.988867188,
            "unit": "ns",
            "range": "± 241371.9003850581"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2111379.8909333884,
            "unit": "ns",
            "range": "± 71560.8345365083"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1246023.9997395833,
            "unit": "ns",
            "range": "± 12933.239823191565"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3103477.930935889,
            "unit": "ns",
            "range": "± 226646.8285219374"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 869264.3649453922,
            "unit": "ns",
            "range": "± 51172.30995438875"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 849962.6223725819,
            "unit": "ns",
            "range": "± 30887.459783067945"
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
          "id": "9001bd0946b8b6dc35a0785c3f1aae063602f01b",
          "message": "Removed unnecessary code",
          "timestamp": "2023-03-31T22:04:01+09:00",
          "tree_id": "02d553f2e0cb0f162a8019a02314901ac94430c7",
          "url": "https://github.com/greymistcube/libplanet/commit/9001bd0946b8b6dc35a0785c3f1aae063602f01b"
        },
        "date": 1680269042205,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8138789,
            "unit": "ns",
            "range": "± 105458.10857014413"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22084174.454545453,
            "unit": "ns",
            "range": "± 821084.7446447434"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 59779588.63414634,
            "unit": "ns",
            "range": "± 3163485.328881386"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 125517719.225,
            "unit": "ns",
            "range": "± 6566097.2350189425"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 232990648.54385966,
            "unit": "ns",
            "range": "± 9823441.397309262"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 74989.30337078651,
            "unit": "ns",
            "range": "± 5388.780249497549"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 452274.79,
            "unit": "ns",
            "range": "± 72458.64978295963"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 399896.39130434784,
            "unit": "ns",
            "range": "± 66315.33238405606"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 347026.5705882353,
            "unit": "ns",
            "range": "± 29996.642324714656"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6195569.822916667,
            "unit": "ns",
            "range": "± 502726.3979528238"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4527845.189473684,
            "unit": "ns",
            "range": "± 456587.31355534523"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25481.571428571428,
            "unit": "ns",
            "range": "± 3188.208498290447"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 134580.875,
            "unit": "ns",
            "range": "± 28017.515909366037"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 135968.97802197802,
            "unit": "ns",
            "range": "± 23205.364563670293"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 294254.75789473683,
            "unit": "ns",
            "range": "± 52655.14499617696"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9664.494623655914,
            "unit": "ns",
            "range": "± 1023.5076689211205"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22904.93181818182,
            "unit": "ns",
            "range": "± 3564.5805311584554"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1686134.6494845361,
            "unit": "ns",
            "range": "± 212184.3046060351"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3257946.3673469387,
            "unit": "ns",
            "range": "± 319598.3357839716"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2805657.932989691,
            "unit": "ns",
            "range": "± 375295.46457105264"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6856741.26,
            "unit": "ns",
            "range": "± 276716.05564973893"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3679145.098901099,
            "unit": "ns",
            "range": "± 427174.5277126605"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3693664.6041666665,
            "unit": "ns",
            "range": "± 254389.90598571437"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4961570.010638298,
            "unit": "ns",
            "range": "± 435146.82233705"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5113970.677083333,
            "unit": "ns",
            "range": "± 479554.26482141763"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10905588.54494382,
            "unit": "ns",
            "range": "± 1829512.8513530463"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7061613.906808035,
            "unit": "ns",
            "range": "± 125077.46288180024"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2174687.424178686,
            "unit": "ns",
            "range": "± 75326.64490753776"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1368089.83984375,
            "unit": "ns",
            "range": "± 20409.423472584203"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2563864.222486413,
            "unit": "ns",
            "range": "± 62989.58572920827"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 949095.2065022787,
            "unit": "ns",
            "range": "± 36001.10423865645"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 857723.4729003906,
            "unit": "ns",
            "range": "± 11192.817439036504"
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
          "id": "209f23ed94d414763aae988f5fc01c17843dc22e",
          "message": "Removed unnecessary code",
          "timestamp": "2023-04-03T08:10:57+09:00",
          "tree_id": "3630ec58dcbad78583537686b426cf184982a649",
          "url": "https://github.com/greymistcube/libplanet/commit/209f23ed94d414763aae988f5fc01c17843dc22e"
        },
        "date": 1680477943824,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7661637.628571428,
            "unit": "ns",
            "range": "± 245450.19480898711"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18385445.416666668,
            "unit": "ns",
            "range": "± 164259.97199310074"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 47851438.5,
            "unit": "ns",
            "range": "± 1086774.787572069"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 91336300,
            "unit": "ns",
            "range": "± 661609.1758557314"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 196855094.46666667,
            "unit": "ns",
            "range": "± 3213234.906008938"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 57090.58947368421,
            "unit": "ns",
            "range": "± 6816.972339893036"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 378420.5903614458,
            "unit": "ns",
            "range": "± 20131.09932420188"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 347372,
            "unit": "ns",
            "range": "± 14567.88792142595"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 340076.4270833333,
            "unit": "ns",
            "range": "± 19621.909245719668"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5540315.8125,
            "unit": "ns",
            "range": "± 104679.22735558618"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4062682.2666666666,
            "unit": "ns",
            "range": "± 74958.18205169625"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24326.520833333332,
            "unit": "ns",
            "range": "± 3982.0442197422253"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 111921.21,
            "unit": "ns",
            "range": "± 24664.46372075059"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 117108.79591836735,
            "unit": "ns",
            "range": "± 14156.143510573138"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 269009.26744186046,
            "unit": "ns",
            "range": "± 15981.447244649522"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 10774.073684210527,
            "unit": "ns",
            "range": "± 1456.4635049740823"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24664.418367346938,
            "unit": "ns",
            "range": "± 3711.644664697679"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1523402.4838709678,
            "unit": "ns",
            "range": "± 157417.52082754826"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2882328.7746478873,
            "unit": "ns",
            "range": "± 130799.63510971353"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2479658.1616161615,
            "unit": "ns",
            "range": "± 244195.31593059478"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6584857.414893617,
            "unit": "ns",
            "range": "± 246595.93337921554"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3143208.7717391304,
            "unit": "ns",
            "range": "± 176955.73389156163"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3294158.8444444444,
            "unit": "ns",
            "range": "± 211513.68865160772"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4306734.048780488,
            "unit": "ns",
            "range": "± 155183.38487865755"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4302366.802083333,
            "unit": "ns",
            "range": "± 270915.83427414345"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8616291.040816326,
            "unit": "ns",
            "range": "± 322332.4956828326"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7318614.540625,
            "unit": "ns",
            "range": "± 102425.4087433142"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2073662.6638183594,
            "unit": "ns",
            "range": "± 38835.1823507259"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1286243.3666666667,
            "unit": "ns",
            "range": "± 20434.079434681073"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2734438.511259191,
            "unit": "ns",
            "range": "± 53378.775877542634"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 879632.3533854167,
            "unit": "ns",
            "range": "± 8171.101213930959"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 720377.85234375,
            "unit": "ns",
            "range": "± 7181.346506298075"
          }
        ]
      }
    ]
  }
}