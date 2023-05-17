window.BENCHMARK_DATA = {
  "lastUpdate": 1684292977929,
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "839e4da7af33f2a177ead2dd7db2b0f05158ce4e",
          "message": "Merge pull request #3059 from greymistcube/refactor/block-validate\n\n♻️ Refactor block validate",
          "timestamp": "2023-04-05T15:32:20+09:00",
          "tree_id": "ed2fe2e334a015663806ebf70c79dcaa66638716",
          "url": "https://github.com/greymistcube/libplanet/commit/839e4da7af33f2a177ead2dd7db2b0f05158ce4e"
        },
        "date": 1680684443354,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8608916.933333334,
            "unit": "ns",
            "range": "± 69921.3455804517"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20565668.48,
            "unit": "ns",
            "range": "± 530364.9046970019"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56829962.758064516,
            "unit": "ns",
            "range": "± 1647663.5235408344"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 109928695.64285715,
            "unit": "ns",
            "range": "± 1451926.3791688222"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 208982344.79545453,
            "unit": "ns",
            "range": "± 7746911.761593998"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 63961.45744680851,
            "unit": "ns",
            "range": "± 9488.640898480682"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 398456.4038461539,
            "unit": "ns",
            "range": "± 16182.116696974308"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 332578.4183673469,
            "unit": "ns",
            "range": "± 13213.16992126406"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 328557.77142857143,
            "unit": "ns",
            "range": "± 9437.164975232123"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5637955.7,
            "unit": "ns",
            "range": "± 103278.0416138881"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3930174.590909091,
            "unit": "ns",
            "range": "± 95478.46372258339"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22472.603092783505,
            "unit": "ns",
            "range": "± 3561.339324036371"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 115331.375,
            "unit": "ns",
            "range": "± 13300.966762845315"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 116547.01030927835,
            "unit": "ns",
            "range": "± 7400.336486571132"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 258368.75263157894,
            "unit": "ns",
            "range": "± 22616.79352330749"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6623.095744680851,
            "unit": "ns",
            "range": "± 1687.0593877605968"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21995.26530612245,
            "unit": "ns",
            "range": "± 4258.995919012528"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1660438.097826087,
            "unit": "ns",
            "range": "± 220830.82110874323"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3218718.6056338027,
            "unit": "ns",
            "range": "± 157566.95119059514"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2713405.7422680412,
            "unit": "ns",
            "range": "± 292169.6055275257"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6707827.95,
            "unit": "ns",
            "range": "± 236198.81292456103"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3393927.966666667,
            "unit": "ns",
            "range": "± 56754.47770109253"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3537061.1333333333,
            "unit": "ns",
            "range": "± 179108.08688155227"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4559582.038461538,
            "unit": "ns",
            "range": "± 122551.36872984513"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4606187.52631579,
            "unit": "ns",
            "range": "± 234449.35251472253"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8898744.42857143,
            "unit": "ns",
            "range": "± 242619.83142515883"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6814589.048469388,
            "unit": "ns",
            "range": "± 270685.1358429788"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1918623.5579427083,
            "unit": "ns",
            "range": "± 34379.57303955988"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1298739.1173177084,
            "unit": "ns",
            "range": "± 19413.079349059983"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2755107.092354911,
            "unit": "ns",
            "range": "± 77269.60814824556"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 861246.0674579327,
            "unit": "ns",
            "range": "± 8319.759175709367"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 737243.2081580529,
            "unit": "ns",
            "range": "± 2922.5117288520228"
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
          "id": "23fa5406ecce3a4959fc38701c795682c8fbcadc",
          "message": "Merge pull request #3097 from dahlia/1.0-maintenance\n\nRelease 1.0.0",
          "timestamp": "2023-04-18T15:39:29+09:00",
          "tree_id": "244d53aa04947b63072d6989e3d8373876b569bc",
          "url": "https://github.com/greymistcube/libplanet/commit/23fa5406ecce3a4959fc38701c795682c8fbcadc"
        },
        "date": 1681801351018,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9582312.010416666,
            "unit": "ns",
            "range": "± 890768.6146243649"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22430728.28,
            "unit": "ns",
            "range": "± 1411231.228083929"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 57196603.54494382,
            "unit": "ns",
            "range": "± 3112354.392692485"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 113292291.04040404,
            "unit": "ns",
            "range": "± 7210580.077035837"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 211547386.41836736,
            "unit": "ns",
            "range": "± 12854922.608659664"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 72488.05555555556,
            "unit": "ns",
            "range": "± 7719.434423759401"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 434099.793814433,
            "unit": "ns",
            "range": "± 46172.04627936379"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 341930,
            "unit": "ns",
            "range": "± 38989.11376692085"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 308087.55670103093,
            "unit": "ns",
            "range": "± 38825.30080130553"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5540690.322580645,
            "unit": "ns",
            "range": "± 168620.49520355606"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4034457.12,
            "unit": "ns",
            "range": "± 106397.39248540507"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20006.135416666668,
            "unit": "ns",
            "range": "± 4627.081600681367"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 90638.63043478261,
            "unit": "ns",
            "range": "± 13201.75473619579"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 101696.52083333333,
            "unit": "ns",
            "range": "± 18940.911101844667"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 241545.4347826087,
            "unit": "ns",
            "range": "± 26685.246016530047"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6581.234042553191,
            "unit": "ns",
            "range": "± 1618.1211072578515"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19750.489361702126,
            "unit": "ns",
            "range": "± 4212.047487567064"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1688689.4939759036,
            "unit": "ns",
            "range": "± 218775.1284537626"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3329984.9540229887,
            "unit": "ns",
            "range": "± 375807.89864150895"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2829164.375,
            "unit": "ns",
            "range": "± 408609.43006080564"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8301017.768041237,
            "unit": "ns",
            "range": "± 1784188.5051378547"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3286274.875,
            "unit": "ns",
            "range": "± 158532.38386400387"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3510993.1649484537,
            "unit": "ns",
            "range": "± 215300.7341171143"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4576393.842857143,
            "unit": "ns",
            "range": "± 222600.64926970407"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4749465.596774193,
            "unit": "ns",
            "range": "± 314212.6926573804"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9343674.333333334,
            "unit": "ns",
            "range": "± 719847.5646334962"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7036997.152933372,
            "unit": "ns",
            "range": "± 237485.25531145075"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2090102.605747768,
            "unit": "ns",
            "range": "± 34857.512515043425"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1341724.7521033655,
            "unit": "ns",
            "range": "± 15398.156331153332"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2633953.924609375,
            "unit": "ns",
            "range": "± 57786.849827640326"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 881033.7133789062,
            "unit": "ns",
            "range": "± 23880.524646646452"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 756200.0874399039,
            "unit": "ns",
            "range": "± 9886.227847958928"
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
          "id": "52a12ef55668e95bc25e5a3c76c5a141411e9594",
          "message": "Merge pull request #3108 from greymistcube/refactor/blockchain-append\n\n♻️ Streamlined rendering",
          "timestamp": "2023-04-20T22:30:49+09:00",
          "tree_id": "6b586792b8a407850815e44c7ba432f12ced39ee",
          "url": "https://github.com/greymistcube/libplanet/commit/52a12ef55668e95bc25e5a3c76c5a141411e9594"
        },
        "date": 1682000323049,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7938661.5,
            "unit": "ns",
            "range": "± 104775.69130835099"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21459178.166666668,
            "unit": "ns",
            "range": "± 283014.3064724736"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51052427.28571428,
            "unit": "ns",
            "range": "± 898594.8401413413"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 103302769.53333333,
            "unit": "ns",
            "range": "± 1900155.4217815923"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 213181575.4827586,
            "unit": "ns",
            "range": "± 6230238.629349364"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 73602.58064516129,
            "unit": "ns",
            "range": "± 7470.8369799458"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 413251.373015873,
            "unit": "ns",
            "range": "± 18513.170858653022"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 351900.1129032258,
            "unit": "ns",
            "range": "± 15926.096146596958"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 351309,
            "unit": "ns",
            "range": "± 11209.830756568499"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5674006.933333334,
            "unit": "ns",
            "range": "± 76828.71683023837"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3991855.289473684,
            "unit": "ns",
            "range": "± 66919.62764771463"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 28719.331578947367,
            "unit": "ns",
            "range": "± 2402.0047595601486"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 127044.07731958762,
            "unit": "ns",
            "range": "± 9681.430041186937"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 137093.43055555556,
            "unit": "ns",
            "range": "± 6730.579991596457"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 148166.02083333334,
            "unit": "ns",
            "range": "± 16265.80994729948"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 10633.91237113402,
            "unit": "ns",
            "range": "± 1410.9299367835483"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 26459.967741935485,
            "unit": "ns",
            "range": "± 2837.793832522833"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1650371.792929293,
            "unit": "ns",
            "range": "± 177878.03974635305"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3008986.3076923075,
            "unit": "ns",
            "range": "± 153681.44096878375"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2640409.9292929294,
            "unit": "ns",
            "range": "± 253930.16120540127"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6771709.862068965,
            "unit": "ns",
            "range": "± 193331.76777123756"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3541677.75,
            "unit": "ns",
            "range": "± 163478.39208345083"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3566553.396226415,
            "unit": "ns",
            "range": "± 143330.43872992595"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4646949.684210527,
            "unit": "ns",
            "range": "± 95462.50292657242"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4661827.861538461,
            "unit": "ns",
            "range": "± 216142.55136106626"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8283377.7105263155,
            "unit": "ns",
            "range": "± 174232.2195929517"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6931528.854947916,
            "unit": "ns",
            "range": "± 118210.63811049334"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1877638.916015625,
            "unit": "ns",
            "range": "± 14499.8148269684"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1277073.5769042969,
            "unit": "ns",
            "range": "± 23721.67151720855"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2620312.905691964,
            "unit": "ns",
            "range": "± 61342.39532308599"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 862958.5432477678,
            "unit": "ns",
            "range": "± 8302.379086711328"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 728253.2918619792,
            "unit": "ns",
            "range": "± 6704.549651543777"
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
          "id": "3d5cba6bcac996e6a87feb854a16dcb1eed4b134",
          "message": "Merge pull request #3170 from greymistcube/prepare/1.3.0\n\n🔧 Prepare 1.3.0",
          "timestamp": "2023-05-17T11:00:40+09:00",
          "tree_id": "55c7a7526e013a7451c0e1a0d1a8ad138feb19c8",
          "url": "https://github.com/greymistcube/libplanet/commit/3d5cba6bcac996e6a87feb854a16dcb1eed4b134"
        },
        "date": 1684292960439,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9044476,
            "unit": "ns",
            "range": "± 645981.8714691107"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22309300.17010309,
            "unit": "ns",
            "range": "± 1382316.7903575997"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56150157.23076923,
            "unit": "ns",
            "range": "± 2601701.066223181"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 112191520.33333333,
            "unit": "ns",
            "range": "± 4414677.034900219"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 232794772.15,
            "unit": "ns",
            "range": "± 9652107.942814581"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 80338.16666666667,
            "unit": "ns",
            "range": "± 4886.361256940929"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 349709.6904761905,
            "unit": "ns",
            "range": "± 23230.17504613611"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 372066.15591397847,
            "unit": "ns",
            "range": "± 63618.20909475365"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 330941.9761904762,
            "unit": "ns",
            "range": "± 12045.527216616487"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4472198.917647059,
            "unit": "ns",
            "range": "± 313506.95673223113"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3860411.1470588236,
            "unit": "ns",
            "range": "± 106474.60361467404"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26993.76530612245,
            "unit": "ns",
            "range": "± 3869.0490255199293"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 129348.45054945054,
            "unit": "ns",
            "range": "± 20908.289623051816"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 128372.88823529411,
            "unit": "ns",
            "range": "± 8042.475241008883"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 137295.11627906977,
            "unit": "ns",
            "range": "± 19311.876089091857"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 10536.921052631578,
            "unit": "ns",
            "range": "± 1060.9644506341947"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24614.664835164836,
            "unit": "ns",
            "range": "± 3260.0868027425836"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1601849.196969697,
            "unit": "ns",
            "range": "± 149425.298616949"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3038063.1267605633,
            "unit": "ns",
            "range": "± 148269.46306052076"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2556722.3595505618,
            "unit": "ns",
            "range": "± 195368.70115270905"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6571420.8125,
            "unit": "ns",
            "range": "± 215854.21239490248"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3672694.75,
            "unit": "ns",
            "range": "± 323383.69550388184"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3713325.4263157896,
            "unit": "ns",
            "range": "± 297735.7938407181"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4878423.815217392,
            "unit": "ns",
            "range": "± 377347.8568126462"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4913559.934782608,
            "unit": "ns",
            "range": "± 589484.6251028471"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8522286.3125,
            "unit": "ns",
            "range": "± 748199.786285698"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7450692.337749094,
            "unit": "ns",
            "range": "± 358369.81440439355"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2110340.0610795454,
            "unit": "ns",
            "range": "± 78362.46531534984"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1365699.1720145089,
            "unit": "ns",
            "range": "± 22145.07846291317"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3295563.1142282197,
            "unit": "ns",
            "range": "± 224426.2502372425"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 905137.1947509765,
            "unit": "ns",
            "range": "± 31535.026026171556"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 838989.0330660637,
            "unit": "ns",
            "range": "± 36439.972142203624"
          }
        ]
      }
    ]
  }
}